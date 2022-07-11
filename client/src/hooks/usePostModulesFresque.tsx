import axios from "axios";
import { ModulesInterface } from "../interfaces/ModulesInterface";



export default function usePostModulesFresque() {
    return (module:any) => {

        let unite = 86400;

        if(module.disponibliteFresqueUnite == "semaine(s)"){
            unite = unite * 7;
        }else if(module.disponibliteFresqueUnite == "mois"){
            unite = unite * 30;
        }else if(module.disponibliteFresqueUnite == "année(s)"){
            unite = unite * 365;
        };

        const dureeModule = module.disponibliteFresqueValue * unite;

        const obj = {
                availability_time:"2022-06-18T17:00:00.000Z",
                module_display_time: dureeModule
            }

        return axios({
            url: "http://localhost:3030/api/modules/updateModules",
            method:"post",
            data: {
                id_event : module.eventID,
                fresque : obj
            },
            withCredentials: true
        })
        .then(res=>res.data)
        }
}