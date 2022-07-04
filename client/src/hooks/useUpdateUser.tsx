import axios from "axios";
import UserInterface from "../interfaces/UserInterface";



export default function useUpdateUser() {
    return (token: string, user: UserInterface) => {
        return axios({
            url: "http://localhost:3030/api/user/modifyUserInfo",
            method:"post",
            data: new URLSearchParams({
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
