import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";

export default function Playlist() {
    return (
        <>
            <PageBanner imgSrc="/icons/modules-gradient.svg" title="Playlist" desc="Consultez les musiques qui passent/ont été passés durant l’évènement" />
            <PageContainer>
                <div className="page-playlist">
                    Play
                </div>
            </PageContainer>
        </>
    )
}