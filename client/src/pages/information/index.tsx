import GridContainer from "../../components/common/GridContainer";
import PageBanner from "../../components/common/PageBanner";

export default function Information() {
    return (
        <>
            <PageBanner imgSrc="./icons/params.svg" title="Informations" desc="Informations relatives à l'évènement" />
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
                </div>
            </GridContainer>
        </>
    )
}