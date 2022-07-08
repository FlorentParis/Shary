import PageBanner from "../../components/common/PageBanner";
import {useState, useEffect } from "react";
import useGetModuleByEventId from "../../hooks/useGetModuleByEventId";
import {useAppSelector}  from "../../hooks/reduxHooks"
import { useNavigate, useParams } from "react-router";
import useGetUserById from "../../hooks/useGetUserById";

const { io } = require("socket.io-client");
const socket = io.connect("http://localhost:3031");
let receiveMessage = false;

export default function Chat() {
    const [messageContent, setMessageContent] = useState<string>("");
    const [messageData, setMessageData] = useState<object>({});
    const [listMessage, setListMessage] = useState<any[]>([]);
    const getModuleByEventId = useGetModuleByEventId();
    const eventsData = useAppSelector((state) => state.events.data);
    const id_event : any = useParams().id
    const user = useAppSelector((state) => state.userConnected)

    const navigate = useNavigate()

    const getUserById = useGetUserById();

    useEffect( () => {
        const addMessage = (data: any) => {
            setListMessage(listMessage => [...listMessage, data])
        };
        if(receiveMessage === false){
            getModuleByEventId(id_event, "chat").then((res:any) => {
                let messages = res.chat.messages;
                for (const [key, value] of Object.entries(messages)) {
                    // @ts-ignore: Unreachable code error
                    getUserById(value.id_author).then((res:any) => {
                        console.log("!!!!!!!!!!!!!!!!!" + res)
                    })
                    setListMessage(listMessage => [...listMessage, value])
                }
            })
            socket.emit("joinRoomEvent", "chat" + id_event);
            socket.on("receive_message", addMessage)
            receiveMessage = true
        }
        /* return () => {
            // turning of socket listner on unmount
          socket.off('receive_message', addMessage);
        } */
    }, [])

    useEffect(() => {
        let good;
        eventsData.map(event => {
            if ( event["_id"] === id_event ) {
                good = true;
            }
        })
        good ? console.log("good") : navigate("/404")
    }, [id_event])

    useEffect(() => {
        setMessageData ({
            event:id_event,
            id_author: user.id,
            content: messageContent,
            date:
              new Date(Date.now()).getDate() +
              "/" +
              new Date(Date.now()).getMonth() +
              "/" +
              new Date(Date.now()).getFullYear() +
              " à " +
              new Date(Date.now()).getHours() +
              ":" +
              new Date(Date.now()).getMinutes(),
        });
    }, [messageContent])

    const handlePostMessage = async (e:any) => {
        await socket.emit("send_message", messageData)
        setListMessage(listMessage => [...listMessage, messageData])
    }

    return <>
        <PageBanner imgSrc="/icons/chat.svg" title="Chat" desc="Discutez avec tous les invités"/>
        <div className="page-chat">
            <div className="message-container">
                <div>
                    {listMessage.map((message: any) => {
                        return message.id_author == user.id ?
                        <div className="message-container me">
                            <div className="message">
                                <div className="message-top">
                                    <div className="img-container">
                                        <img src={user.img} />
                                    </div>
                                    <span>{message.id_author}</span>
                                    <span>{message!.date}</span>
                                </div>
                                <p>{message!.content}</p>
                            </div>
                        </div>
                        :
                        <div className="message-container me">
                            <div className="message">
                                <div className="message-top">
                                    <div className="img-container">
                                        <img src="/prov/pp.png" />
                                    </div>
                                    <span>{message!.id_author}</span>
                                    <span>Hier à {message!.date}</span>
                                </div>
                                <p>{message!.content}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <div className="form-chat">
                <div>
                    <div className="img-container">
                        <img src={user.img} />
                    </div>
                    <input type="text" placeholder="Début de votre message" onChange={(e:any) => setMessageContent(e.target.value)}/>
                    <button onClick={handlePostMessage}>
                        <img src="/icons/send-plane.svg" />
                    </button>
                </div>
            </div>
        </div>
    </>
}