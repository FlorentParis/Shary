import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";
import BtnAddEvent from "../../components/event-pages/BtnAddEvent";
import EventCard from "../../components/event-pages/EventCard";

export default function EventToCome() {
    return (
        <>
            <PageBanner imgSrc="./icons/event-to-come.svg" title="Evénements à venir" desc="Liste des évènements à venir auquel vous êtes rattaché" />
            <PageContainer>
                <div className="page-event-to-come">
                    <div className="bar-filter">
                        <div>
                            <span>Tous les évènements</span>
                            <span id="underline"></span>
                        </div>
                        <ul>
                            <li><span></span>Mariages</li>
                            <li><span></span>Anniversaires</li>
                            <li><span></span>Workshops</li>
                            <li><span></span>Escapades</li>
                        </ul>
                    </div>
                    <div className="grid-event-card">
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <BtnAddEvent />
                    </div>
                </div>
            </PageContainer>
        </>
    )
}