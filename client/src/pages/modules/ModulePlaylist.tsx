import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { updateModuleSlicePlaylist } from "../../features/modulesSlice";

interface ModuleInterface {
    displayMenuModule: boolean,
    setDisplayMenuModule: Function,
    modulePlaylistActive:boolean,
    setModulePlaylistActive: any, 
    eventId:any,
    playlistForm:any,
    setModulesForm:any
}

export default function ModulePlaylist({displayMenuModule, setDisplayMenuModule, modulePlaylistActive, setModulePlaylistActive, eventId, playlistForm, setModulesForm}: ModuleInterface) {

    const closeModuleMenuPlaylist = (e:any) => {
        const moduleMenuPlaylist = document.getElementsByClassName("module-playlist")[0] as HTMLElement;
        if (displayMenuModule == true) {
            setDisplayMenuModule(false);
            moduleMenuPlaylist.classList.remove("active");
        }
        e.preventDefault();
        dispatch(updateModuleSlicePlaylist(formInput));
    }

    useEffect(() => {
        const slider = document.getElementById("checkboxPlaylist") as HTMLInputElement;
        if(modulePlaylistActive==true){
            slider.checked = true;
        }else{
            slider.checked = false;
        }
        setFormInput((prev: any) => ({
            ...prev,
            ["active"]:  slider.checked
        }))
    },[modulePlaylistActive])

    const activeModulePlaylist = () => {
        if(modulePlaylistActive==false){
            setModulePlaylistActive(true)
        }else{
            setModulePlaylistActive(false);
        }
    }

    const dispatch = useAppDispatch();

    const [formInput, setFormInput] = useState({
        eventID: eventId,
        nom:"playlist",
        active: "",
        disponbilitePlaylistUnite: "",
        module_display_time: ""
    })

    const handleChange = ({target}: any) => {
        if(target.type=="checkbox"){
            setFormInput((prev: any) => ({
                ...prev,
                [target.name]: target.checked
            })) 
            setModulesForm((prev:any) =>({
                ...prev,
                playlist:{
                    ...prev.playlist,
                    [target.name]: target.checked
                }
            }))
        }else{
            setFormInput((prev: any) => ({
                ...prev,
                [target.name]: target.value
            })) 
            setModulesForm((prev:any) =>({
                ...prev,
                playlist:{
                    ...prev.playlist,
                    [target.name]: target.value
                }
            }))
        }
    }

    return (
        <div className="module-group module-playlist">
            <div className="module-playlist-container">
                <div className="titre-container">
                    <div className="container-slider">
                        <label className="switch">
                            <input name="active" onChange={handleChange} onClick={activeModulePlaylist} type="checkbox" id="checkboxPlaylist" />
                            <div className="slider round"></div>
                        </label>
                    </div>
                    <span>Module playlist</span>
                </div>
                <div className="description-container">
                    <p>Permettez ?? vos invit??s d?????changer au moyen d???une messagerie priv??e sp??cialement cr??ee pour votre ??v??nement. </p>
                </div>
                <div className="demo" style={{backgroundImage: "url('https://img.freepik.com/vecteurs-libre/fond-silhouettes-palmiers-colores_23-2148541792.jpg?w=2000')"}}>
                    
                </div>
                <div className="disponibilite-container">
                    <p>Disponibilit?? du module</p>
                    <div className="disponibilite-playlist">
                        <input name="module_display_time" onChange={handleChange} className="premier-input-apr??s" type="number" placeholder="0" value ={playlistForm.module_display_time}></input>
                        <input name="disponbilitePlaylistUnite" onChange={handleChange} list="datalist-deuxieme-input-apr??s" className="deuxieme-input-apr??s" placeholder="jour(s)"></input>
                        <datalist id="datalist-deuxieme-input-apr??s">
                            <option value="jour(s)"></option>
                            <option value="semaine(s)"></option>
                            <option value="mois"></option>
                            <option value="ann??e(s)"></option>
                        </datalist>
                        <p>apr??s</p>
                    </div>
                </div>
                <div className="enregistrer-container">
                    <button className="enregistrer-btn" onClick={closeModuleMenuPlaylist}>
                        Enregistrer
                    </button>
                </div>
            </div>
        </div>
    )
}