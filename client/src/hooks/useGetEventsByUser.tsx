import axios from "axios"

export default function useGetEventsByUser() {
    return (username: string) => {
        return axios({
            url: "http://localhost:3030/api/event/getAllEventsByUser",
            method:"get",
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${(username)}`
            }
        })
        .then(res=>res.data)
    }
}
