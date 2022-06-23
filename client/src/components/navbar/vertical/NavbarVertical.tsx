import { Link } from "react-router-dom";

export default function NavbarVertical() {
    return (
        <nav className="navbar-left">
            <button>
                +
            </button>
            <Link to="/">
                <img src="./icons/home.svg" alt="" />
            </Link>
            <Link to="/event-to-come">
                <img src="./icons/event-to-come.svg" alt="" />
            </Link>
            <Link to="/event-pass">
                <img src="./icons/event-pass.svg" alt="" />
            </Link>
            <span className="line"></span>
            <Link to="/information">
                <img src="./icons/params.svg" alt="" />
            </Link>
            <Link to="/guest-list">
                <img src="./icons/guest.svg" alt="" />
            </Link>
            <Link to="/alert">
                <img src="./icons/alert.svg" alt="" />
            </Link>
            <Link to="/modules">
                <img src="./icons/modules.svg" alt="" />
            </Link>
            <Link to="/moderation">
                <img src="./icons/moderation.svg" alt="" />
            </Link>
        </nav>
    )
}