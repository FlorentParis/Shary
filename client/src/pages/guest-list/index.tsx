import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";
import BtnAddGuest from "./BtnAddGuest";
import GuestCard from "./GuestCard";

export default function GuestList() {
    return (
        <>
            <PageBanner imgSrc="./icons/guest-list-gradient.svg" title="Liste des invités" desc="Liste des invités de votre évènement" />
            <PageContainer>
                <div className="page-guest-list">
                    <div className="grid-guest-list">
                        <BtnAddGuest />
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
        </>
    )
}