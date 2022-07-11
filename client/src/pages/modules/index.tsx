import { useEffect } from "react";
import { useNavigate } from "react-router";
import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";
import { useAppSelector } from "../../hooks/reduxHooks";

export default function Modules() {
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
    return (
        <>
            <PageBanner imgSrc="/icons/gradient/modules-gradient.svg" title="Modules" desc="Gestion des Modules" />
            <PageContainer>
                Modules
            </PageContainer>
        </>
    )
}