import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";

export default function Photo() {
    return (
        <>
            <PageBanner imgSrc="./icons/modules-gradient.svg" title="Module photos & vidéos" desc="Retrouvez ici toutes les annonces qui ont été faites pour l’évènement en cours" />
            <PageContainer>
                <div className="page-photo">
                    Modules
                </div>
            </PageContainer>
        </>
    )
}