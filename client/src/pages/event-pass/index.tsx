import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";

export default function EventPass() {
    return (
        <>
            <PageBanner imgSrc="./icons/event-pass.svg" title="Evénements passés" desc="Liste des évènements passés auquel vous êtes rattaché" />
            <PageContainer>
                Event pass
            </PageContainer>
        </>
    )
}