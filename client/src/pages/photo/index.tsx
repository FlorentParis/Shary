import { useState } from "react";
import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";
import AsidePhoto from "./AsidePhoto";

export default function Photo() {

    const [displayUpload, setDisplayUpload] = useState<boolean>(false);
    /* L'idée c'est de faire passer l'object dans le displayAside et le récupérer dans l'élément TSX */
    const [displayAside, setDisplayAside] = useState<any>(false);

    return (
        <>
            <PageBanner imgSrc="./icons/modules-gradient.svg" title="Module photos & vidéos" desc="Retrouvez ici toutes les annonces qui ont été faites pour l’évènement en cours" />
            <PageContainer>
                <div className="page-photo">
                    <div className="bar-filter-photo">
                        <div>
                            <div onClick={() => setDisplayUpload(true)}>
                                <span>Upload de photos & vidéos</span>
                                <span className="underline" style={displayUpload ? {} : {display: 'none'}}></span>
                            </div>
                            <div onClick={() => setDisplayUpload(false)}>
                                <span>Galerie photos et vidéos</span>
                                <span className="underline" style={displayUpload ? {display: "none"} : {}}></span>
                            </div>
                        </div>
                        <ul>
                            <li><span></span>Photos</li>
                            <li><span></span>Vidéos</li>
                        </ul>
                    </div>
                    {displayUpload ? 
                        <div className="upload">
                            <button>Glissez et déposez votre photo ou vidéo ici</button>
                        </div> 
                    : ""}
                    {displayUpload ? "" :
                        <div className="grid-photo">
                            <div onClick={() => setDisplayAside(true)}>
                                <div className="container-img">
                                    <span></span>
                                    <img src="./img/demo.png" />
                                </div>
                                <span>Photo de Marie Louise</span>
                                <span>Postée le 01/01/2022</span>
                            </div>
                            <div onClick={() => setDisplayAside(true)}>
                                <div className="container-img">
                                    <span></span>
                                    <img src="./prov/pp.png" />
                                </div>
                                <span>Photo de Marie Louise</span>
                                <span>Postée le 01/01/2022</span>
                            </div>
                            <div onClick={() => setDisplayAside(true)}>
                                <div className="container-img">
                                    <span></span>
                                    <img src="./img/demo.png" />
                                </div>
                                <span>Photo de Marie Louise</span>
                                <span>Postée le 01/01/2022</span>
                            </div>
                            <div onClick={() => setDisplayAside(true)}>
                                <div className="container-img">
                                    <span></span>
                                    <img src="./prov/pp.png" />
                                </div>
                                <span>Photo de Marie Louise</span>
                                <span>Postée le 01/01/2022</span>
                            </div>
                            <div onClick={() => setDisplayAside(true)}>
                                <div className="container-img">
                                    <span></span>
                                    <img src="./prov/pp.png" />
                                </div>
                                <span>Photo de Marie Louise</span>
                                <span>Postée le 01/01/2022</span>
                            </div>
                        </div>
                    }
                </div>
            </PageContainer>
            {displayAside ? <AsidePhoto /> : ""}
        </>
    )
}