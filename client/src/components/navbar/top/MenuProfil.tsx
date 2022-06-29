import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function MenuProfil() {

    return (
        <div className="menu-profil">
            <Link to="/profil">
                <img src="./icons/user.svg" alt="icon user" />
                <span>Profil</span>
            </Link>
            <Link to="/settings">
                <img src="./icons/params.svg" alt="icon user" />
                <span>Paramètres</span>
            </Link>
            <Link to="/contact-us">
                <img src="./icons/contact.svg" alt="icon user" />
                <span>Nous contacter</span>
            </Link>
            <span id="btn-disconnect">Déconnexion</span>
        </div>
    )
}