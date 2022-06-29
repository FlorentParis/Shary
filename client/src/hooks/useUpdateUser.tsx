import axios from "axios";
import { LocalUserInterface } from "../interfaces/LocalUserInterface";



export default function useUpdateUser() {
    return (token: string, user: LocalUserInterface) => {
        return axios({
            url: "http://localhost:3030/api/user/modifyUserInfo",
            method:"post",
            data: new URLSearchParams({
                id: user.id,
                lastname: user.lastname,
                firstname: user.firstname,
                email: user.email,
                password: user.password,
            }),
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res=>res.data)
        }
}
