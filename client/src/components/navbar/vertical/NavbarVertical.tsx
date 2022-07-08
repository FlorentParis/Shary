import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";

import { Link, useLocation } from "react-router-dom";

export default function NavbarVertical() {
  const location = useLocation();
  const pathname = location.pathname;
  const splittedPath = pathname.split("/");

  const targetEventData = useAppSelector((state) => state.targetEvent.data);
  const userConnectedData = useAppSelector((state) => state.userConnected);
  //@ts-ignore
  const userAdminId = targetEventData.userId;
  const isAdmin = userConnectedData.id === userAdminId;
  //@ts-ignore
  const eventId = targetEventData._id;

  console.log(userConnectedData.id)

  const pageLocation = splittedPath[splittedPath.length - 1];

  const displayDynamicTools = () => {
    switch (splittedPath.length) {
      case 2:
        if (splittedPath[1] === "event" && isAdmin) {
          return (
            <>
              {" "}
              <span className="line"></span>
              <Link to="/information">
                <img src="/icons/params.svg" alt="" />
              </Link>
            </>
          );
        } else {
          return (
            <>
              <button>+</button>
              <Link to="/">
                <img src="/icons/home.svg" alt="" />
              </Link>
              <Link to="/event-to-come">
                <img src="/icons/event-to-come.svg" alt="" />
              </Link>
              <Link to="/event-pass">
                <img src="/icons/event-pass.svg" alt="" />
              </Link>{" "}
            </>
          );
        }

      case 3:
      case 4:
        if (splittedPath[1] === "event" && isAdmin) {
          return (
            <>
              <button>+</button>
              <Link to="/">
                <img src="/icons/home.svg" alt="" />
              </Link>
              <Link to="/event-to-come">
                <img src="/icons/event-to-come.svg" alt="" />
              </Link>
              <Link to="/event-pass">
                <img src="/icons/event-pass.svg" alt="" />
              </Link>
              <span className="line"></span>

              <Link to={`/event/${eventId}/information`}>
                <img src="/icons/params.svg" alt="" />
              </Link>

              <Link to={`/event/${eventId}/guest-list`}>
                <img src={pageLocation == "guest-list" ? "/icons/guest.svg" /* actif */ : /* Non actif */ "/icons/params.svg"} alt="" />
              </Link>

              <Link to={`/event/${eventId}/alert`}>
                <img src="/icons/alert.svg" alt="" />
              </Link>

              <Link to={`/event/${eventId}/modules`}>
                <img src="/icons/modules.svg" alt="" />
              </Link>

              <Link to={`/event/${eventId}/moderation`}>
                <img src="/icons/moderation.svg" alt="" />
              </Link>
            </>
          );
        }
        if (splittedPath[1] === "event" && !isAdmin) {
          return (
            <>
              <Link to="/">
                <img src="/icons/invited/home.svg" alt="" />
              </Link>
              <Link to={`/event/${eventId}/information`}>
                <img src="/icons/invited/infos.svg" alt="" />
              </Link>
              <Link to={`/event/${eventId}/announce`}>
                <img src="/icons/invited/announce.svg" alt="" />
              </Link>
              <span className="line"></span>
              <Link to={`/event/${eventId}/photo`}>
                <img src="/icons/invited/module-photovideo.svg" alt="" />
              </Link>
              <Link to={`/event/${eventId}/golden-book`}>
                <img src="/icons/invited/module-goldenbook.svg" alt="" />
              </Link>
              <Link to={`/event/${eventId}/fresco`}>
                <img src="/icons/invited/module-fresco.svg" alt="" />
              </Link>
              <Link to={`/event/${eventId}/playlist`}>
                <img src="/icons/invited/module-playlist.svg" alt="" />
              </Link>
              <Link to={`/event/${eventId}/fireworks`}>
                <img src="/icons/invited/module-fireworks.svg" alt="" />
              </Link>
              <Link to={`/event/${eventId}/chat`}>
                <img src="/icons/invited/module-chat.svg" alt="" />
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
      {displayDynamicTools()}
    </nav>
  );
}
