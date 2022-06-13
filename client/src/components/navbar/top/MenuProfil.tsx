export default function MenuProfil() {
    return (
        <div className="menu-profil">
            <div>
                <img src="./icons/user.svg" alt="icon user" />
                <span>Profil</span>
            </div>
            <div>
                <img src="./icons/params.svg" alt="icon user" />
                <span>Paramètres</span>
            </div>
            <div>
                <img src="./icons/contact.svg" alt="icon user" />
                <span>Nous contacter</span>
            </div>
            <span id="btn-disconnect">Déconnexion</span>
        </div>
    )
}