import { Link } from "react-router-dom";

export default function NavbarVertical() {
    return (
        <nav className="navbar-left">
            <button>
                +
            </button>
            <Link to="/profil">
                <img src="./icons/event-list.svg" alt="" />
            </Link>
            <Link to="/profil">
                <img src="./icons/event-pass.svg" alt="" />
            </Link>
            <span className="line"></span>
            <Link to="/profil">
                <img src="./icons/params.svg" alt="" />
            </Link>
            <Link to="/profil">
                <img src="./icons/guest.svg" alt="" />
            </Link>
            <Link to="/profil">
                <img src="./icons/alert.svg" alt="" />
            </Link>
            <Link to="/profil">
                <img src="./icons/modules.svg" alt="" />
            </Link>
            <Link to="/profil">
                <img src="./icons/moderation.svg" alt="" />
            </Link>
        </nav>
    )
}