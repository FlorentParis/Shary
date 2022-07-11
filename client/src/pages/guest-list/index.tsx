import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";
import { useAppSelector } from "../../hooks/reduxHooks";
import GuestCard from "./GuestCard";
import ModalAddGuest from "./ModalAddGuest";

export default function GuestList() {
    const navigate = useNavigate();
    const targetEventData = useAppSelector((state) => state.targetEvent.data);
    const userConnectedData = useAppSelector((state) => state.userConnected);
    //@ts-ignore
    const userAdminId = targetEventData.userId;
    const isAdmin = userConnectedData.id === userAdminId;
    // navigate("/error")
    useEffect(() => {
      if (!isAdmin) {
        navigate("/error");
      }
    });

    const [displayModalAddGuest, setDisplayModalAddGuest] = useState<boolean>(false);
    let [mailGuest, setMailGuest] = useState<string>("");

    const handleChange = ({target}: any) => {
        setMailGuest(target.value)
    }

    const handleSubmit = () => {
        console.log(mailGuest)
        /* Envoyer mailGuest */
    }

    return (
        <>
            <PageBanner imgSrc="/icons/gradient/guest-list-gradient.svg" title="Liste des invités" desc="Liste des invités de votre évènement" />
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
            {displayModalAddGuest ? <ModalAddGuest close={setDisplayModalAddGuest} mailGuest={mailGuest} change={handleChange} submit={handleSubmit} /> : ""}
        </>
    )
}