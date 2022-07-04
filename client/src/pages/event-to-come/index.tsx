import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";
import BtnAddEvent from "../../components/event-pages/BtnAddEvent";
import EventCard from "../../components/event-pages/EventCard";
import { setEventsData } from "../../features/eventsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import useGetEvents from "../../hooks/useGetEvents";
import { AppDispatch } from "../../store";

export default function EventToCome() {

    const dispatch = useAppDispatch();

    /* Events */
    const getEvents = useGetEvents();
    const eventsData = useAppSelector((state) => state.events.data);

    useEffect(() => {
        getEvents()
        .then(res => {
            dispatch(setEventsData(res))
        })
    }, [])

    return (
        <>
            <PageBanner imgSrc="./icons/event-to-come-gradient.svg" title="Evénements à venir" desc="Liste des évènements à venir auquel vous êtes rattaché" />
            <PageContainer>
                <div className="page-event-to-come">
                    <div className="bar-filter">
                        <div>
                            <div>
                                <span>Tous les évènements</span>
                                <span className="underline"></span>
                            </div>
                        </div>
                        <ul>
                            <li><span></span>Mariages</li>
                            <li><span></span>Anniversaires</li>
                            <li><span></span>Workshops</li>
                            <li><span></span>Escapades</li>
                        </ul>
                    </div>
                    <div className="grid-event-card">
                        {eventsData?.map((event: any, index: number) => {
                            return <EventCard event={event} key={index} />
                        })}
                        <BtnAddEvent />
                    </div>
                </div>
            </PageContainer>
        </>
    )
}