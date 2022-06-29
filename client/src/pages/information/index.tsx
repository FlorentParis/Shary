import GridContainer from "../../components/common/GridContainer";
import PageBanner from "../../components/common/PageBanner";

export default function Information() {
    return (
        <>
            <PageBanner imgSrc="./icons/params-gradient.svg" title="Informations" desc="Informations relatives à l'évènement" />
            <GridContainer>
                <div>
                    <div className="grid-card gc-4 gr-2">
                        <span>Générales</span>
                        <form>
                            <input placeholder="Nom de l'évènement" />
                            <select>
                                <option>Type d’évènement</option>
                                <option>Mariage</option>
                                <option>Anniversaires</option>
                                <option>Workshops</option>
                                <option>Escapades</option>
                            </select>
                            <textarea placeholder="Description de votre évènement">
                                
                            </textarea>
                        </form>
                    </div>
                    <div className="grid-card gc-6 image-upload-card" style={{background: "url(./img/upload-demo.png)"}}>
                        <div>
                            <span>Importer l'image de votre bannière</span>
                            <input type="image" src="./icons/download.svg" />
                        </div>
                    </div>
                    <div className="grid-card gc-3 date-card">
                        <span>Début de l'évènement</span>
                        <form>
                            <div>
                                <label>Date</label>
                                <input type="date" />
                            </div>
                            <div>
                                <label>Heure</label>
                                <input type="time" />
                            </div>
                        </form>
                    </div>
                    <div className="grid-card gc-3 date-card">
                        <span>Fin de l'évènement</span>
                        <form>
                            <div>
                                <label>Date</label>
                                <input type="date" />
                            </div>
                            <div>
                                <label>Heure</label>
                                <input type="time" />
                            </div>
                        </form>
                    </div>
                    <div className="grid-card gc-4 place-card">
                        <span>Lieu</span>
                        <form>
                            <input placeholder="Adresse" />
                            <div>
                                <input placeholder="Code Postal" />
                                <input placeholder="Ville" />
                            </div>
                            <label>Accès</label>
                            <div>
                                <div>
                                    <input type="checkbox" />
                                    <label>Transports</label>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <label>Transports</label>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <label>Transports</label>
                                </div>
                                <input type="text" placeholder="autre"/>
                            </div>
                        </form>
                    </div>
                    <div className="grid-card gc-3 contact-card">
                        <span>Personne(s) à contacter</span>
                        <form>
                            <p>Définissez les personnes que pourront contacter vos invités.</p>
                            <div>
                                <label>contact n°1</label>
                                <input placeholder="Prénom" />
                                <input placeholder="Téléphone" />
                                <label>Privilégier le contact par</label>
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
                                <label>Privilégier le contact par</label>
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
                    <div className="grid-card gc-3 place-card">
                        <span>Dresscode / Thème</span>
                        <form>
                            <p>Communiquez un thème ou un dresscode à vos invités</p>
                            <textarea placeholder="Dresscode"></textarea>
                        </form>
                    </div>
                    <div className="grid-card gc-4 notifs-card">
                        <span>Notifications</span>
                        <form>
                            <p>Définissez les évènements pour lesquels vous souhaitez recevoir une notification</p>
                            <div>
                                <input type="checkbox" />
                                <label>Invitation acceptée</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label>Invitation déclinée</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label>Nouvelle annonce créée</label>
                            </div>
                        </form>
                    </div>
                    <div className="grid-card gc-3 remainder-card">
                        <span>Alertes / Rappels</span>
                        <form>
                            <p>Envoyer un rappel aux invités</p>
                            <div>
                                <input type="time" name="" id="" />
                                <input type="date" name="" id="" />
                            </div>
                            <textarea placeholder="Message personnalisé"></textarea>
                        </form>
                    </div>
                </div>
            </GridContainer>
        </>
    )
}