import axios from "axios";

export default function useLogin() {
    return (username: string, password: string) => {
        return axios({
            url: "http://localhost:3030/api/user/getUserConnexion",
            method:"post",
            withCredentials: true,
            data: {
                username: username,
                password: password
            },
            headers: { 'Content-Type': 'application/json' },

        })
        .then(res=>res.data)
    }
}