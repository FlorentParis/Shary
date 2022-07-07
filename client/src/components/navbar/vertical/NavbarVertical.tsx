import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";

import { Link, useLocation } from "react-router-dom";

export default function NavbarVertical() {
  const location = useLocation();
  const pathname = location.pathname;
  const splittedPath = pathname.split("/");

  const targetEventData = useAppSelector((state) => state.targetEvent);
  const userConnectedData = useAppSelector((state) => state.userConnected);
  //@ts-ignore
  const userAdminId = targetEventData.data.userId;
  const isAdmin = userConnectedData.id === userAdminId;

  const displayDynamicTools = () => {
    switch (splittedPath.length) {
      case 2:
        if (splittedPath[1] === "event" && isAdmin) {
          return (
            <>
              {" "}
              <span className="line"></span>
              <Link to="/information">
                <img src="./icons/params.svg" alt="" />
              </Link>
            </>
          );
        } else break;

      case 3:
        if (splittedPath[1] === "event" && isAdmin) {
          return (
            <>
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
            </>
          );
        } else break;
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
      {/* <span className="line"></span> */}
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
      {displayDynamicTools()}
    </nav>
  );
}
