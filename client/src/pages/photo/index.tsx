import { useState, useEffect } from "react";
import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";
import AsidePhoto from "./AsidePhoto";
import useUploadCloudinary from "../../hooks/useUploadCloudinary";
import { useAppSelector } from "../../hooks/reduxHooks";
import useUploadModule from "../../hooks/useUploadModule";



export default function Photo() {

    const { io } = require("socket.io-client");
    const socket = io.connect("http://localhost:3031");
    socket.emit("joinRoomEvent", "chat" + "629fad3334582a973da2f7cf");
    let [file, setFile] = useState<any>({});
    const formData = new FormData();
    formData.append("upload_preset", "modules");
    formData.append("cloud_name", "dr7db2zsv");


    const [displayUpload, setDisplayUpload] = useState<boolean>(true);
    /* L'idée c'est de faire passer l'object dans le displayAside et le récupérer dans l'élément TSX */
    const [displayAside, setDisplayAside] = useState<any>(false);

    const author = useAppSelector((state) => state.userConnected.id)
    const id_event = "629fad3334582a973da2f7cf"

    const uploadCloud = useUploadCloudinary();
    const uploadModule = useUploadModule(); 

    const inputFileChange = (e: any) => {
        setFile(e.target.files![0])
    };

    useEffect(() => {

        if(file.name) {
            formData.append("file", file);

            uploadCloud("image", formData)
            .then(res=> {
                const fileURL = res.url
                const imageSocket = {event:id_event,file:fileURL}
                socket.emit("upload_file", imageSocket);
                uploadModule(fileURL, id_event, author, "photos_videos")
                .then(res=>res.data);
            })
        }else {
            console.log()
        }
        
    }, [file])

    useEffect(() => {
        socket.on("receive_file", (data:any) => {
          console.log(data.file)
        });
      }, [socket]);

    return (
        <>
            <PageBanner imgSrc="/icons/modules-gradient.svg" title="Module photos & vidéos" desc="Retrouvez ici toutes les annonces qui ont été faites pour l’évènement en cours" />
            <PageContainer>
                <div className="page-photo">
                    <div className="bar-filter-photo">
                        <div>
                            <div onClick={() => setDisplayUpload(true)}>
                                <span style={displayUpload ? {fontWeight: "700"} : {}}>Upload de photos & vidéos</span>
                                <span className="underline" style={displayUpload ? {} : {display: 'none'}}></span>
                            </div>
                            <div onClick={() => setDisplayUpload(false)}>
                                <span style={displayUpload ? {} : {fontWeight: "700"}}>Galerie photos et vidéos</span>
                                <span className="underline" style={displayUpload ? {display: "none"} : {}}></span>
                            </div>
                        </div>
                        <ul>
                            <li><span></span>Photos</li>
                            <li><span></span>Vidéos</li>
                        </ul>
                    </div>
                    {displayUpload ? 
                        <div className="upload">
                            <form >
                                <input type="file" onChange={inputFileChange}/>
                                <label>Envoyez votre photo ou vidéo ici</label>
                            </form>
                        </div> 
                    : ""}
                    {displayUpload ? "" :
                        <div className="grid-photo">
                            <div onClick={() => setDisplayAside(true)}>
                                <div className="container-img">
                                    <span></span>
                                    <img src="/img/demo.png" />
                                </div>
                                <span>Photo de Marie Louise</span>
                                <span>Postée le 01/01/2022</span>
                            </div>
                            <div onClick={() => setDisplayAside(true)}>
                                <div className="container-img">
                                    <span></span>
                                    <img src="/prov/pp.png" />
                                </div>
                                <span>Photo de Marie Louise</span>
                                <span>Postée le 01/01/2022</span>
                            </div>
                            <div onClick={() => setDisplayAside(true)}>
                                <div className="container-img">
                                    <span></span>
                                    <img src="/img/demo.png" />
                                </div>
                                <span>Photo de Marie Louise</span>
                                <span>Postée le 01/01/2022</span>
                            </div>
                            <div onClick={() => setDisplayAside(true)}>
                                <div className="container-img">
                                    <span></span>
                                    <img src="/prov/pp.png" />
                                </div>
                                <span>Photo de Marie Louise</span>
                                <span>Postée le 01/01/2022</span>
                            </div>
                            <div onClick={() => setDisplayAside(true)}>
                                <div className="container-img">
                                    <span></span>
                                    <img src="/prov/pp.png" />
                                </div>
                                <span>Photo de Marie Louise</span>
                                <span>Postée le 01/01/2022</span>
                            </div>
                        </div>
                    }
                </div>
            </PageContainer>
            {displayAside ? <AsidePhoto /> : ""}
        </>
    )
}