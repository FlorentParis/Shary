import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";

export default function GuestList() {
    return (
        <>
            <PageBanner imgSrc="./icons/guest-list-gradient.svg" title="Liste des invités" desc="Liste des invités de votre évènement" />
            <PageContainer>
                <div>
                    Guest List
                </div>
            </PageContainer>
        </>
    )
}