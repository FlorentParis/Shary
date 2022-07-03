import axios from "axios";
import UserInterface from "../interfaces/UserInterface";



export default function useRegister() {
    return (token: string, user: UserInterface) => {
        return axios({
            url: "http://localhost:3030/api/user/createUser",
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
