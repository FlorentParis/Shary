import { useState } from "react"

interface NavbarTopInterface {
    displayMenuProfil: boolean,
    setDisplayMenuProfil: Function
}

export default function NavbarTop({displayMenuProfil, setDisplayMenuProfil}: NavbarTopInterface) {

    const closeProfileNav= () => {
        if (displayMenuProfil == true) {
            setDisplayMenuProfil(false)
        }
    }

    return (
        <nav onClick={closeProfileNav} className="navbar-top-container" >
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
                        <div className="img-container">
                            <img src="./prov/pp.png" alt="profil picture" />
                        </div>
                        {displayMenuProfil ? <span></span> : ""}
                    </button>
                </div>
            </div>
        </nav>
    )
}