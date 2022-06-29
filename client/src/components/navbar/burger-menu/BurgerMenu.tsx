import { Link } from "react-router-dom";

export default function BurgerMenu() {
    return (
        <div className="burger-menu">
            <div>
                <div className="img-container">
                    <img src="./prov/pp.png" />
                </div>
                <span>Hi *nom* !</span>
            </div>
            <ul>
                <li>
                    <Link to="/profil">
                        <img src="./icons/user.svg" alt="icon user" />
                        <span>Profil</span>
                    </Link>
                </li>
                <li>
                    <Link to="/profil">
                        <img src="./icons/bell.svg" alt="icon notifs" />
                        <span>Notification</span>
                    </Link>
                </li>
                <li>
                    <Link to="/settings">
                        <img src="./icons/params.svg" alt="icon settings" />
                        <span>Paramètres</span>
                    </Link>
                </li>
                <li>
                    <Link to="/contact-us">
                        <img src="./icons/contact.svg" alt="icon contact" />
                        <span>Nous contacter</span>
                    </Link>
                </li>
            </ul>
            <div>
                <span>Déconnexion</span>
                <span>© shary - 2022</span>
            </div>
        </div>
    )
}