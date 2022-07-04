import axios from "axios";

export default function useLogin() {
    return (username: string, password: string) => {
        return axios({
            url: "http://localhost:3030/api/user/getUserConnexion",
            method:"get",
            withCredentials: true,
            data: {
                username: username,
                password: password
            }
        })
        .then(res=>res.data)
    }
}
