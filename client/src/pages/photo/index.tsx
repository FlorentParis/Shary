import { useState } from "react";
import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";

export default function Photo() {

    const [displayUpload, setDisplayUpload] = useState<boolean>(false);

    return (
        <>
            <PageBanner imgSrc="./icons/modules-gradient.svg" title="Module photos & vidéos" desc="Retrouvez ici toutes les annonces qui ont été faites pour l’évènement en cours" />
            <PageContainer>
                <div className="page-photo">
                    <div className="bar-filter-photo">
                        <div onClick={() => setDisplayUpload(true)}>
                            <span>Upload de photos & vidéos</span>
                            <span className="underline" style={displayUpload ? {} : {display: 'none'}}></span>
                        </div>
                        <div onClick={() => setDisplayUpload(false)}>
                            <span>Galerie photos et vidéos</span>
                            <span className="underline" style={displayUpload ? {display: "none"} : {}}></span>
                        </div>
                    </div>
                    {displayUpload ? 
                        <div className="upload">
                            <button>Glissez et déposez votre photo ou vidéo ici</button>
                        </div> 
                    : ""}
                    {displayUpload ? "" :
                        <div className="grid-photo">
                            <div>
                                <div className="container-img">
                                    <span></span>
                                    <img src="./img/demo.png" />
                                </div>
                                <span>Photo de Marie Louise</span>
                            </div>
                            <div>
                                <div className="container-img">
                                    <span></span>
                                    <img src="./prov/pp.png" />
                                </div>
                                <span>Photo de Marie Louise</span>
                            </div>
                            <div>
                                <div className="container-img">
                                    <span></span>
                                    <img src="./img/demo.png" />
                                </div>
                                <span>Photo de Marie Louise</span>
                            </div>
                            <div>
                                <div className="container-img">
                                    <span></span>
                                    <img src="./prov/pp.png" />
                                </div>
                                <span>Photo de Marie Louise</span>
                            </div>
                            <div>
                                <div className="container-img">
                                    <span></span>
                                    <img src="./prov/pp.png" />
                                </div>
                                <span>Photo de Marie Louise</span>
                            </div>
                        </div>
                    }
                </div>
            </PageContainer>
        </>
    )
}