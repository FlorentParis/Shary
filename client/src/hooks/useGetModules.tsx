import axios from "axios"

export default function useGetModules() {
    return (): Promise<[]> => {
        return axios({
            url: "http://localhost:3030/api/modules/getAllModules",
            method:"get",
        }).then(res=>res.data.data.modules)
    }
}
