import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import GridContainer from "../../components/common/GridContainer";
import PageBanner from "../../components/common/PageBanner";
import { useAppSelector } from "../../hooks/reduxHooks";
import Informations from "../../interfaces/Informations"
import {useState} from 'react'

export default function Information() {

    const navigate = useNavigate();

    const eventId = useParams().id;
    const eventsData = useAppSelector((state) => state.events.data);

    const [eventForm, setEventForm] = useState<Informations>({

        userId: Math.random(),

        // GENERAL
        name: '',
        type: 'none',
        description: '',

        // LIEU
        address: '',
        zipcode: '',
        city: '',
        train: false,
        car: false,
        autre: false,
        precision: '',

        // PERSONNE A CONTACTER
        contactName: '',
        contactPhone: '',
        contactCall: false,
        contactText: false,

        // PERSONNE A CONTACTER 2
        contactNameSec: '',
        contactPhoneSec: '',
        contactCallSec: false,
        contactTextSec: false,

        //DRESSCODE
        dresscode: '',

        //EVENT START
        start: '',
        eventStartHour: '',

        //EVENT END
        end: '',
        eventEndHour: '',

        //ALERT RAPPEL
        alertDate: '',
        alertDescription: '',
        alertHour: '',

        //NOTIFACATIONS
        inviteAccepted: false,
        inviteRefused: false,
        newClaim: false,

        //UPLOAD IMAGE
        image:'',
    })


    const handleChange = ({target}: any) => {
        setEventForm((prev: any) => ({
            ...prev,
            [target.name]: target.value
        }))

        if (target.checked) {
            setEventForm((prev: any) => ({
                ...prev,
                [target.name]: true
            }))
        }        
        console.log(eventForm)
    }
    const sendForm = (e:any) => {
        e.preventDefault()
        console.log(eventForm)
    }


    useEffect(() => {
        let good;
        eventsData.map(event => {
            if ( event["_id"] === eventId ) {
                good = true;
            }
        })
        good ? console.log("good") : navigate("/404")
    }, [eventId])

   
    return (
        <>
            <PageBanner imgSrc="./icons/params-gradient.svg" title="Informations" desc="Informations relatives à l'évènement" />
            <form action="">
            <GridContainer>
                <div>
                    <div className="grid-card gc-4 gr-2">
                        <span>Générales</span>
                        <form>
                            <input onChange={handleChange} name="name" placeholder="Nom de l'évènement" />
                            <select  onChange={handleChange} name="type">
                                <option>Type d’évènement</option>
                                <option>Mariage</option>
                                <option >Anniversaires</option>
                                <option>Workshops</option>
                                <option>Escapades</option>
                            </select>
                            <textarea onChange={handleChange} name="description" placeholder="Description de votre évènement">
                                
                            </textarea>
                        </form>
                    </div>
                    <div className="grid-card gc-6 image-upload-card" style={{background: "url(./img/upload-demo.png)"}}>
                        <div>
                            <span>Importer l'image de votre bannière</span>
                            <input onChange={handleChange} name="image" type="file" multiple accept="image/*" src="./icons/download.svg" />
                        </div>
                    </div>
                    <div className="grid-card gc-3 date-card">
                        <span>Début de l'évènement</span>
                        <form>
                            <div>
                                <label>Date</label>
                                <input onChange={handleChange} name="start" type="date" />
                            </div>
                            <div>
                                <label>Heure</label>
                                <input onChange={handleChange} name="eventStartHour" type="time" />
                            </div>
                        </form>
                    </div>
                    <div className="grid-card gc-3 date-card">
                        <span>Fin de l'évènement</span>
                        <form>
                            <div>
                                <label>Date</label>
                                <input onChange={handleChange} name="end" type="date" />
                            </div>
                            <div>
                                <label>Heure</label>
                                <input onChange={handleChange} name="eventEndHour" type="time" />
                            </div>
                        </form>
                    </div>
                    <div className="grid-card gc-4 place-card">
                        <span>Lieu</span>
                        <form>
                            <input onChange={handleChange} name="address" placeholder="Adresse" />
                            <div>
                                <input onChange={handleChange} name="zipcode" placeholder="Code Postal" />
                                <input onChange={handleChange} name="city" placeholder="Ville" />
                            </div>
                            <label>Accès</label>
                            <div>
                                <div>
                                    <input onChange={handleChange} name="train" type="checkbox" />
                                    <label>Train</label>
                                </div>
                                <div>
                                    <input onChange={handleChange} name="car" type="checkbox" />
                                    <label>Voiture (parking)</label>
                                </div>
                                <div>
                                    <input onChange={handleChange} name="autre" type="checkbox" />
                                    <label>Autre</label>
                                </div>

                                <input onChange={handleChange} name="precision" type="text" placeholder="Précision"/>
                            </div>
                        </form>
                    </div>
                    <div className="grid-card gc-3 contact-card">
                        <span>Personne(s) à contacter</span>
                        <form>
                            <p>Définissez les personnes que pourront contacter vos invités.</p>
                            <div>
                                <label>contact n°1</label>
                                <input onChange={handleChange} name="contactName" placeholder="Prénom" />
                                <input onChange={handleChange} name="contactPhone"  placeholder="Téléphone" />
                                <label>Privilégier le contact par</label>
                                <div className="options-select">
                                    <div>
                                        <input onChange={handleChange} name="contactCall"  type="checkbox" />
                                        <label>Appel</label>
                                    </div>
                                    <div>
                                        <input onChange={handleChange} name="contactText"  type="checkbox" />
                                        <label>SMS</label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label>contact n°2</label>
                                <input  onChange={handleChange} name="contactNameSec" placeholder="Prénom" />
                                <input  onChange={handleChange} name="contactPhoneSec" placeholder="Téléphone" />
                                <label>Privilégier le contact par</label>
                                <div className="options-select">
                                    <div>
                                        <input  onChange={handleChange} name="contactCallSec" type="checkbox" />
                                        <label>Appel</label>
                                    </div>
                                    <div>
                                        <input  onChange={handleChange} name="contactTextSec" type="checkbox" />
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
                            <textarea  onChange={handleChange} name="dresscode" placeholder="Dresscode"></textarea>
                        </form>
                    </div>
                    <div className="grid-card gc-4 notifs-card">
                        <span>Notifications</span>
                        <form>
                            <p>Définissez les évènements pour lesquels vous souhaitez recevoir une notification</p>
                            <div>
                                <input onChange={handleChange} name="inviteAccepted" type="checkbox" />
                                <label>Invitation acceptée</label>
                            </div>
                            <div>
                                <input onChange={handleChange} type="checkbox" name="inviteRefused" />
                                <label>Invitation déclinée</label>
                            </div>
                            <div>
                                <input onChange={handleChange} type="checkbox" name="newClaim" />
                                <label>Nouvelle annonce créée</label>
                            </div>
                        </form>
                    </div>
                    <div className="grid-card gc-3 remainder-card">
                        <span>Alertes / Rappels</span>
                        <form>
                            <p>Envoyer un rappel aux invités</p>
                            <div>
                                <input onChange={handleChange} name="alertDate" type="time"  id="" />
                                <input onChange={handleChange} name="alertHour" type="date"  id="" />
                            </div>
                            <textarea onChange={handleChange} name="alertDescription" placeholder="Message personnalisé"></textarea>
                        </form>
                    </div>
                </div>
                
            </GridContainer>
            <button onClick={sendForm}>send</button>
            </form>
        </>
    )
}