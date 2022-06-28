import axios from "axios";
import { LocalEventPost } from "../interfaces/LocalEventPost";



export default function useUpdateEvent() {
    return (token: string, event: LocalEventPost) => {
        return axios({
            url: "http://localhost:3030/api/event/updateEvent",
            method:"post",
            data: new URLSearchParams({
                userId: event.userId,
                name: event.name,
                start: event.start,
                end: event.end,
                dresscode: event.dresscode,
                address: event.address,
                zipcode: event.zipcode,
                city: event.city,
                transport: event.transport,
                parking: event.parking,
                pedestrian: event.pedestrian,
                username: event.username,
                phone: event.phone,
                contactBy: event.contactBy,
                inviteAccepted: event.inviteAccepted,
                inviteRefused: event.inviteRefused,
                announcement: event.announcement,
            }),
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res=>res.data)
        }
}
