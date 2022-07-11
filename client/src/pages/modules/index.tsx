import PageBanner from "../../components/common/PageBanner";
import { useEffect, useState } from "react";
import ModulesList from "./ModulesList"
import ModulePhotoVideo from "./ModulePhotoVideo"
import ModuleChat from "./ModuleChat"
import ModuleLivreDor from "./ModuleLivreDor"
import ModuleFresque from "./ModuleFresque"
import ModuleFeuDArtifice from "./ModuleFeuDArtifice"
import ModulePlaylist from "./ModulePlaylist"
import ModuleBLANC from "./ModuleBLANC"
import { useParams } from "react-router";

export default function Modules() {

    const [displayMenuModule, setDisplayMenuModule] = useState<boolean>(false);

    const [modulePhotoVideoActive, setModulePhotoVideoActive] = useState<boolean>(false);
    const [moduleChatActive, setModuleChatActive] = useState<boolean>(false);
    const [moduleLivreDorActive, setModuleLivreDorActive] = useState<boolean>(false);
    const [moduleFresqueActive, setModuleFresqueActive] = useState<boolean>(false);
    const [moduleFeuDArtificeActive, setModuleFeuDArtificeActive] = useState<boolean>(false);
    const [modulePlaylistActive, setModulePlaylistActive] = useState<boolean>(false);

    const eventId = useParams().id;

    return (
        <>
            <PageBanner imgSrc="/icons/gradient/modules-gradient.svg" title="Gestion des modules" desc="Lorem ipsum et bla bla  bla Lorem ipsum et bla bla bla Lorem ipsum et bla bla bla" />
            <div className="container">
                <ModulesList setDisplayMenuModule={setDisplayMenuModule} 
                    modulePhotoVideoActive={modulePhotoVideoActive} 
                    setModulePhotoVideoActive={setModulePhotoVideoActive}
                    moduleChatActive={moduleChatActive}
                    setModuleChatActive={setModuleChatActive}
                    moduleLivreDorActive={moduleLivreDorActive}
                    setModuleLivreDorActive={setModuleLivreDorActive}
                    moduleFresqueActive={moduleFresqueActive}
                    setModuleFresqueActive={setModuleFresqueActive}
                    moduleFeuDArtificeActive={moduleFeuDArtificeActive}
                    setModuleFeuDArtificeActive={setModuleFeuDArtificeActive}
                    modulePlaylistActive={modulePlaylistActive}
                    setModulePlaylistActive={setModulePlaylistActive}
                />
                <ModuleBLANC/>
                <ModulePhotoVideo displayMenuModule={displayMenuModule} setDisplayMenuModule={setDisplayMenuModule} modulePhotoVideoActive={modulePhotoVideoActive} setModulePhotoVideoActive={setModulePhotoVideoActive} eventId={eventId}/>
                <ModuleChat displayMenuModule={displayMenuModule} setDisplayMenuModule={setDisplayMenuModule} moduleChatActive={moduleChatActive} setModuleChatActive={setModuleChatActive} eventId={eventId}/>
                <ModuleLivreDor displayMenuModule={displayMenuModule} setDisplayMenuModule={setDisplayMenuModule} moduleLivreDorActive={moduleLivreDorActive} setModuleLivreDorActive={setModuleLivreDorActive} eventId={eventId}/>
                <ModuleFresque displayMenuModule={displayMenuModule} setDisplayMenuModule={setDisplayMenuModule} moduleFresqueActive={moduleFresqueActive} setModuleFresqueActive={setModuleFresqueActive} eventId={eventId}/> 
                <ModuleFeuDArtifice displayMenuModule={displayMenuModule} setDisplayMenuModule={setDisplayMenuModule} moduleFeuDArtificeActive={moduleFeuDArtificeActive} setModuleFeuDArtificeActive={setModuleFeuDArtificeActive} eventId={eventId}/>
                <ModulePlaylist displayMenuModule={displayMenuModule} setDisplayMenuModule={setDisplayMenuModule} modulePlaylistActive={modulePlaylistActive} setModulePlaylistActive={setModulePlaylistActive} eventId={eventId}/>
            </div>
        </>
    )
}