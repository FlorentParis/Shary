import { useState } from "react";
import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";
import GuestCard from "./GuestCard";
import ModalAddGuest from "./ModalAddGuest";

export default function GuestList() {

    const [displayModalAddGuest, setDisplayModalAddGuest] = useState<boolean>(false);

    return (
        <>
            <PageBanner imgSrc="./icons/guest-list-gradient.svg" title="Liste des invités" desc="Liste des invités de votre évènement" />
            <PageContainer>
                <div className="page-guest-list">
                    <div className="grid-guest-list">
                        <div onClick={() => setDisplayModalAddGuest(true)} className="guest-card btn-add-guest">
                            <div className="container-img">
                                <span>+</span>
                            </div>
                            <span>Ajouter de nouveaux participants</span>
                        </div>
                        <GuestCard />
                        <GuestCard />
                        <GuestCard />
                        <GuestCard />
                        <GuestCard />
                        <GuestCard />
                        <GuestCard />
                    </div>
                </div>
            </PageContainer>
            {displayModalAddGuest ? <ModalAddGuest close={setDisplayModalAddGuest} /> : ""}
        </>
    )
}