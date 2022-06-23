import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";

export default function Homepage() {
    return (
        <>
            <PageBanner imgSrc="./icons/home.svg" title="Accueil" desc="Retrouvez un aperçu de vos évènements à venir et passés ou créez en un rapidement" />
            <PageContainer>
                <div className="page-homepage">
                    <div className="carousel">
                        <p>Vos évènements en cours</p>
                        <div className="wrapper-container">
                            <div className="wrapper" style={{gridTemplateColumns: "repeat(12, 1fr)"}}>
                                <div className="item">
                                    <div style={{backgroundImage: "url('./img/upload-demo.png')"}}>
                                        <div>
                                            <span>Anniversaire Marie-Jeannine</span>
                                            <p>Cliquez pour participez à cet évènement</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span>En cours</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel">
                        <p>Vos évènements à venir</p>
                        <div className="wrapper-container">
                            <div className="wrapper" style={{gridTemplateColumns: "repeat(12, 1fr)"}}>
                                <div className="item">
                                    <div style={{backgroundImage: "url('./img/demo.png')"}}>
                                        <div>
                                            <span>Mariage Anne et Jean</span>
                                            <p>Cliquez pour paramétrer cet évènement</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span>A venir</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div style={{backgroundImage: "url('./img/upload-demo.png')"}}>
                                        <div>
                                            <span>Soirée Entreprise</span>
                                            <p>Cliquez pour participer à cet évènement</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span>A venir</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div style={{backgroundImage: "url('./img/upload-demo.png')"}}>
                                        <div>
                                            <span>Noces d'or Marie-Jeannine et Michel</span>
                                            <p>Cliquez pour paramétrer cet évènement</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span>A venir</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div style={{backgroundImage: "url('./img/upload-demo.png')"}}>
                                        <div>
                                            <span>Mariage Odette et René</span>
                                            <p>Cliquez pour parciper à cet évènement</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span>A venir</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div style={{backgroundImage: "url('./img/upload-demo.png')"}}>
                                        <div>
                                            <span>Mariage Odette et René</span>
                                            <p>Cliquez pour parciper à cet évènement</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span>A venir</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div style={{backgroundImage: "url('./img/upload-demo.png')"}}>
                                        <div>
                                            <span>Mariage Odette et René</span>
                                            <p>Cliquez pour parciper à cet évènement</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span>A venir</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div style={{backgroundImage: "url('./img/upload-demo.png')"}}>
                                        <div>
                                            <span>Mariage Odette et René</span>
                                            <p>Cliquez pour parciper à cet évènement</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span>A venir</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div style={{backgroundImage: "url('./img/upload-demo.png')"}}>
                                        <div>
                                            <span>Mariage Odette et René</span>
                                            <p>Cliquez pour parciper à cet évènement</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span>A venir</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Un nouvel évènement à venir ?</p>
                        <button>Créez votre évènement</button>
                    </div>
                </div>
            </PageContainer>
        </>
    )
}