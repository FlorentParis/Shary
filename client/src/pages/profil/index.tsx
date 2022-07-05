import GridContainer from "../../components/common/GridContainer";
import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";
import { useAppSelector } from "../../hooks/reduxHooks";

export default function Profil() {

    const firstName = useAppSelector((state) => state.userConnected.firstName);

    return (
        <>
            <PageBanner imgSrc="./icons/user.svg" title="Profil" desc="Consultez ou modifiez votre profil" />
            <GridContainer>
                <div className="page-profil">
                    <div className="grid-card gc-4 gr-2">
                        <span>Informations personnelles</span>
                        <form>
                            <input type="text" placeholder="Nom" value={firstName} />
                            <input type="text" placeholder="Prénom" />
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
                            <div className="add-pp">
                                <input type="image" src="./icons/download_black.svg" />
                            </div>
                            <p>Suggéré pour vous</p>
                        </form>
                    </div>
                    <div className="grid-card gc-3 date-card">
                        <span>Personne(s) à contacter</span>
                        <form>
                            <p>Définissez les personnes que pourront contacter vos invités.</p>
                        </form>
                    </div>
                </div>
            </GridContainer>
        </>
    )
}