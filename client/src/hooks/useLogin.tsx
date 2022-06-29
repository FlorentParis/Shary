import axios from "axios";

export default function useLogin() {
    return (username: string, password: string) => {
        return axios({
            url: "http://localhost:3030/api/user/",
            method:"get",
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${(username + ':' + password)}`
            }
        })
        .then(res=>res.data)
    }
}
