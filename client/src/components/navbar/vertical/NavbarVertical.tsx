import { Link, useLocation } from "react-router-dom";

export default function NavbarVertical() {
  const location = useLocation();
  const pathname = location.pathname;
  const splittedPath = pathname.split("/");
  console.log(pathname, "LOC", splittedPath);

  const display = () => {
    switch (splittedPath.length) {
      case 3:
        console.log(splittedPath.length);
        return (
          <>
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
          </>
        );

      default:
        break;
    }
  };

  return (
    <nav className="navbar-left">
      <button>+</button>
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
      {/* <Link to="/information">
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
      </Link> */}
      {display()}
    </nav>
  );
}
