import { Link } from "react-router-dom";

export default function NavbarBottomMobile() {
    return (
        <div className="navbar-bottom">
            <Link to="/">
                <img src="./icons/home.svg" alt="" />
            </Link>
            <Link to="/event-to-come">
                <img src="./icons/event-to-come.svg" alt="" />
            </Link>
            <button>
                +
            </button>
            <Link to="/event-pass">
                <img src="./icons/event-pass.svg" alt="" />
            </Link>
            <Link to="/profil">
                <img src="./icons/user.svg" alt="" />
            </Link>
        </div>
    )
}