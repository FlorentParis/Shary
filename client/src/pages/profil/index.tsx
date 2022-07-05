import GridContainer from "../../components/common/GridContainer";
import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";
import { useAppSelector } from "../../hooks/reduxHooks";

export default function Profil() {

    const userConnected = useAppSelector((state) => state.userConnected);

    return (
        <>
            <PageBanner imgSrc="./icons/user.svg" title="Profil" desc="Consultez ou modifiez votre profil" />
            <GridContainer>
                <div className="page-profil">
                    <div className="grid-card gc-4 gr-2 infos-perso">
                        <span>Informations personnelles</span>
                        <form>
                            <input type="text" placeholder="Nom" value={userConnected.lastName} />
                            <input type="text" placeholder="Prénom" value={userConnected.firstName} />
                            <div className="separator-ou">ou</div>
                            <input type="text" placeholder="Société" />
                            <div>
                                <label htmlFor="">Date de naissance</label>
                                <input type="date" />
                            </div>
                            <input type="tel" placeholder="Téléphone" />
                            <span>à propos de moi</span>
                            <textarea placeholder="Description personnalisée"></textarea>
                        </form>
                    </div>
                    <div className="grid-card gc-3 date-card">
                        <span>Photo de profil</span>
                        <form>
                            <div className="add-pp" style={{backgroundImage: "url('./prov/pp.png')"}}>
                                <input type="image" src="./icons/download_black.svg" />
                            </div>
                            <p>Suggéré pour vous</p>
                            <div className="suggestion-pp">
                                <div>
                                    <img src="./img/suggestion-pp-1.jpg" />
                                </div>
                                <div>
                                    <img src="./img/suggestion-pp-2.jpg" />
                                </div>
                                <div>
                                    <img src="./img/suggestion-pp-3.jpg" />
                                </div>
                                <div>
                                    <img src="./img/suggestion-pp-4.jpg" />
                                </div>
                                <div>
                                    <img src="./img/suggestion-pp-5.jpg" />
                                </div>
                                <div>
                                    <img src="./img/suggestion-pp-6.jpg" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="grid-card gc-3 contact-card">
                        <span>Personne(s) à contacter</span>
                        <form>
                            <p>Définissez les personnes à contacter en cas d'urgence.</p>
                            <div>
                                <label>contact n°1</label>
                                <input placeholder="Prénom" />
                                <input placeholder="Téléphone" />
                                <label>Contacter par</label>
                                <div className="options-select">
                                    <div>
                                        <input type="checkbox" />
                                        <label>Appel</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" />
                                        <label>SMS</label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label>contact n°2</label>
                                <input placeholder="Prénom" />
                                <input placeholder="Téléphone" />
                                <label>Contacter par</label>
                                <div className="options-select">
                                    <div>
                                        <input type="checkbox" />
                                        <label>Appel</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" />
                                        <label>SMS</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="grid-card gc-4 change-mail-card">
                        <span>Changer d’adresse mail</span>
                        <form>
                            <p>Adresse mail actuelle</p>
                            <span className="actual-mail">{userConnected.mail}</span>
                            <p>Changer d’adresse mail</p>
                            <input placeholder="Nouvelle adresse mail" />
                            <input placeholder="Confirmation nouvelle adresse mail" />
                        </form>
                    </div>
                    <div className="grid-card gc-3 change-pw-card">
                        <span>Changer de mot de passe</span>
                        <form>
                            <input type="password" placeholder="Nouveau mot de passe" />
                            <input type="password" placeholder="Confirmation nouveau mot de passe" />
                        </form>
                    </div>
                    <div className="grid-card gc-3 pref-card">
                        <span>Préférences</span>
                        <form>
                            <p>Qui peut voir mon profil ?</p>
                            <div className="options-select">
                                <div>
                                    <input type="checkbox" />
                                    <label>Tout le monde</label>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <label>Personne</label>
                                </div>
                            </div>
                            <p>Recevoir des notifications par mail</p>
                            <div className="options-select">
                                <div>
                                    <input type="checkbox" />
                                    <label>Toujours</label>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <label>Jamais</label>
                                </div>
                            </div>
                            <div className="option">
                                <input type="checkbox" />
                                <label>Seulement lorsque je ne suis pas sur Shary</label>
                            </div>
                            <p>Abonnement à notre newsletter</p>
                            <div className="options-select">
                                <div>
                                    <input type="checkbox" />
                                    <label>Oui</label>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <label>Non</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </GridContainer>
        </>
    )
}