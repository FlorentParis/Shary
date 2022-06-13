import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";

export default function Alert() {
    return (
        <>
            <PageBanner imgSrc="./icons/alert.svg" title="Ecrire une annonce" desc="Annonces ratachées à l'évènement" />
            <PageContainer>
                Annonce
            </PageContainer>
        </>
    )
}