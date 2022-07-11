import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";
import MediaCard from "./MediaCard";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Moderation() {
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
      <PageBanner
        imgSrc="/icons/gradient/moderation-gradient.svg"
        title="Moderation"
        desc="Moderez les flux de votre évènement"
      />
      <PageContainer>
        <div className="page-moderation">
          <div className="bar-filter">
            <div>
              <div>
                <span>Liste d'attente</span>
                <span className="underline"></span>
              </div>
              <div>
                <span>Blacklist</span>
                <span className="underline"></span>
              </div>
              <input type="text" name="" id="" placeholder="Recherche" />
            </div>
            <div>
              <div>
                <span>Toutes</span>
                <span className="underline"></span>
              </div>
              <div>
                <span>Approuvés</span>
                <span className="underline"></span>
              </div>
              <div>
                <span>Refusés</span>
                <span className="underline"></span>
              </div>
            </div>
          </div>
          <div className="grid-moderation-cart">
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
          </div>
        </div>
      </PageContainer>
    </>
  );
}
