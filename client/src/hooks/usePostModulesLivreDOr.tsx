import axios from "axios";
import { ModulesInterface } from "../interfaces/ModulesInterface";



export default function usePostModulesLivreDOr() {
    return (module:any) => {
        let lecture;
        if(module.lecture=="publique"){
            lecture = false;
        }else if(module.lecture=="prive"){
            lecture = true;
        }
        const obj = {
                availability_time : "2022-06-18T17:00:00.000Z",
                videos: module.autorisationVideo,
                is_private:lecture
            }

        return axios({
            url: "http://localhost:3030/api/modules/updateModules",
            method:"post",
            data: {
                id_event : module.eventID,
                livre_d_or : obj
            },
            withCredentials: true
        })
        .then(res=>res.data)
        }
}


/*
QRcode: true
active: true
autorisationPhotos: true
autorisationVideo: true
blacklist: ['meow']
disponibliteModuleUnite: "jour(s)"
disponibliteModuleValue: "10"
disponiblitePhotoUnite: "jour(s)"
disponiblitePhotoValue: "10"
eventID: "62c455727086600278338426"
lecture: "prive"
nom: "livre_d_or"
*/