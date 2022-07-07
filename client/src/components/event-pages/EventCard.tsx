export default function EventCard(props: any) {

    console.log(props)

    return (
        <div className="event-card">
            <div className="container-img">
                <img src="/img/demo.png" />
            </div>
            <span>{props.event.name}</span>
            <div>
                <span>33 participants</span>
                <span>Mardi 5 juin 2022</span>
            </div>
        </div>
    )
}