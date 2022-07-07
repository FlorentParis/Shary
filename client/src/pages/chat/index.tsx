import PageBanner from "../../components/common/PageBanner";

export default function Chat() {
    return <>
        <PageBanner imgSrc="/icons/chat.svg" title="Chat" desc="Discutez avec tous les invités"/>
        <div className="page-chat">
            <div className="message-container">
                <div>
                    <div className="message-container">
                        <div className="message">
                            <div className="message-top">
                                <div className="img-container">
                                    <img src="/prov/pp.png" />
                                </div>
                                <span>Fabrice Tencule</span>
                                <span>Hier à 19h49</span>
                            </div>
                            <p>Trop cool cet anniversaire, j’adore le module photo & vidéo, c’est mon préféré ! Trop cool cet anniversaire, j’adore le module photo & vidéo, c’est mon préféré ! Trop cool cet anniversaire, j’adore le module photo & vidéo, c’est mon préféré !</p>
                        </div>
                    </div>
                    <div className="message-container me">
                        <div className="message">
                            <div className="message-top">
                                <div className="img-container">
                                    <img src="/prov/pp.png" />
                                </div>
                                <span>Fabrice Tencule</span>
                                <span>Hier à 19h49</span>
                            </div>
                            <p>Trop cool cet anniversaire, j’adore le module photo & vidéo, c’est mon préféré ! Trop cool cet anniversaire, j’adore le module photo & vidéo, c’est mon préféré ! Trop cool cet anniversaire, j’adore le module photo & vidéo, c’est mon préféré !</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-chat">
                <div>
                    <div className="img-container">
                        <img src="/prov/pp.png" />
                    </div>
                    <input type="text" placeholder="Début de votre message" />
                    <button>
                        <img src="/icons/send-plane.svg" />
                    </button>
                </div>
            </div>
        </div>
    </>
}