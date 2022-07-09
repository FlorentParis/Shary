import { useEffect, useState } from "react"
import { useLocation } from "react-router";
import useGetModuleByEventId from "../../hooks/useGetModuleByEventId";
import useGetUserById from "../../hooks/useGetUserById";

export default function Diapo() {

    const arrayQuery = useLocation().pathname.split('/');
    const id_event = arrayQuery[2];

    const findUser = useGetUserById();
    const getModuleByEventId = useGetModuleByEventId();

    const [array, setArray] = useState<any[]>([])

    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        getModuleByEventId(id_event, "photos_videos").then((res:object) => {
            // @ts-ignore: Unreachable code error
            let data = res.photos_videos.medias
            // @ts-ignore: Unreachable code error
            for (const [key, value] of Object.entries(data)) {
                // @ts-ignore: Unreachable code error
                findUser(value.id_author).then(res => {
                    // @ts-ignore: Unreachable code error
                    value.firstname = res.firstname
                })
                // @ts-ignore: Unreachable code error
                setArray( array => [...array, value])
            }
        })
    }, [])

    setInterval(() => {
        if(count < array.length - 1) {
            setCount(count + 1)
        }else {
            setCount(0)
            clearInterval();
        }
    }, 5000)

    return (
        <div className="diapo">
            {array.length > 0 ? 
                <div className="image-container">
                    <img src={array[count].content} />
                </div>
            : ''}
        </div>
    )
}