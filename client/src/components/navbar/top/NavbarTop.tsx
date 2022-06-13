interface NavbarTopInterface {
    displayMenuProfil: boolean,
    setDisplayMenuProfil: Function
}

export default function NavbarTop({displayMenuProfil, setDisplayMenuProfil}: NavbarTopInterface) {
    return (
        <nav className="navbar-top-container">
            <div className="navbar-top">
                <img src="./logo/Shary_LogoFinal.svg" alt="Logo" />
                <div>
                    <button id="btn-add-event">
                        <span>+&nbsp;</span>
                        Créer un évènement
                    </button>
                    <div>
                        <img src="./icons/bell.svg" alt="pic bell" />
                        <span>4</span>
                    </div>
                    <button id="btn-pp" onClick={() => setDisplayMenuProfil(!displayMenuProfil)}>
                        <img src="./prov/pp.png" alt="profil picture" />
                        {displayMenuProfil ? <span></span> : ""}
                    </button>
                </div>
            </div>
        </nav>
    )
}