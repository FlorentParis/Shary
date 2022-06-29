import { Link } from "react-router-dom";

interface NavbarBottomMobileInterface {
    displayMenuProfil: boolean,
    setDisplayMenuProfil: Function
}

export default function NavbarBottomMobile({displayMenuProfil, setDisplayMenuProfil}: NavbarBottomMobileInterface) {

    const closeProfileNav= () => {
        if (displayMenuProfil == true) {
            setDisplayMenuProfil(false)
        }
    }

    return (
        <div className="navbar-bottom"  onClick={closeProfileNav}>
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
            <div onClick={() => setDisplayMenuProfil(!displayMenuProfil)}>
                <img src="./icons/user.svg" alt="" />
            </div>
        </div>
    )
}