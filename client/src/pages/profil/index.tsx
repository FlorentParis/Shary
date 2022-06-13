import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";

export default function Profil() {
    return (
        <>
            <PageBanner imgSrc="./icons/user.svg" title="Profil" desc="Consultez ou modifiez votre profil" />
            <PageContainer>
                Profil
            </PageContainer>
        </>
    )
}