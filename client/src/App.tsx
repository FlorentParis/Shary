import React, { useEffect, useRef, useState } from "react";
import Auth from "./pages/authentification/Auth";
import { Routes, Route, Navigate } from "react-router-dom";
import { AppDispatch } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { setEventsData } from "./features/eventsSlice";
/* import { setUsersData } from "./features/usersSlice";
import { setModulesData } from "./features/modulesSlice"; */



/* Pages */
import Homepage from "./pages/homepage";
import Profil from "./pages/profil";
import EventToCome from "./pages/event-to-come";
import EventPass from "./pages/event-pass";
import GuestList from "./pages/guest-list";
import Modules from "./pages/modules";
import Alert from "./pages/alert";
import Information from "./pages/information";
import Moderation from "./pages/moderation";
import Settings from "./pages/settings";
import Contact from "./pages/contact-us";
import Photo from "./pages/photo";
import GoldenBook from "./pages/golden-book";
import Playlist from "./pages/playlist";
// @ts-ignore: Unreachable code error
import Chat from "./pages/chat";

/* Components */
import NavbarLeft from "./components/navbar/vertical/NavbarVertical";
import NavbarTop from "./components/navbar/top/NavbarTop";
import BurgerMenu from "./components/navbar/burger-menu/BurgerMenu";
import HideIfLogged from "./components/common/HideIfLogged";
import HideIfNotLogged from "./components/common/HideIfNotLogged";

/* Interfaces */
import NavbarBottomMobile from './components/navbar/bottomMobile/NavbarBottomMobile';
import MenuProfil from './components/navbar/top/MenuProfil';

/* Hooks */
import useGetTokenInCookies from './hooks/useGetTokenInCookies';
import { setLoggedUser } from './features/userConnectedSlice';
import Error404 from './pages/error/Error404';
import Error from './pages/error/Error';
import useGetEvents from "./hooks/useGetEvents";
import ContainerModalDiapo from "./components/diapo/containerModalDiapo";

function App() {

  let token = useGetTokenInCookies("access_token");

  const [needsUpdate, setNeedsUpdate] = useState<boolean>(false);

  const dispatch = useAppDispatch()
  const [displayMenuProfil, setDisplayMenuProfil] = useState<boolean>(false);
  const getEvents = useGetEvents();
  const eventsData = useAppSelector((state) => state.events.data);

  const userConnected = useAppSelector((state) => state.userConnected);

  if(token) {
    dispatch(setLoggedUser(token));
  }

  const closeProfile = () => {
    if (displayMenuProfil === true) {
      setDisplayMenuProfil(false)
    }
  };

  useEffect(() => {
    getEvents().then(res => dispatch(setEventsData(res)))
  }, []);

  useEffect(() => {
    getEvents()
    .then(res => {
      dispatch(setEventsData(res))
    })
  }, [needsUpdate])

  const [modalDiapo, setModalDiapo] = useState<boolean>(false);

  return (
    <>
      <HideIfLogged>
        <Routes>
          <Route path="/*" element={<Navigate to="auth/login" />} />
          <Route path="/auth/*" element={<Auth />} />
        </Routes>
      </HideIfLogged>
      <HideIfNotLogged>
        <>
          <NavbarTop
            displayMenuProfil={displayMenuProfil}
            setDisplayMenuProfil={setDisplayMenuProfil}
          />
          {displayMenuProfil ? <MenuProfil /> : ""}
          {displayMenuProfil ? <BurgerMenu /> : ""}
          <div className="content-layout" onClick={closeProfile}>
            <NavbarLeft setModalDiapo={setModalDiapo} />
            <div className="main-layout">
              <Routes>
                <Route path="/*" element={<Error404/>} />
                <Route path="/" element={<Homepage />} />
                <Route path="/error" element={<Error />} />
                <Route path="/event-to-come" element={<EventToCome />} />
                <Route path="/event-pass" element={<EventPass />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/contact-us" element={<Contact />} />
                
                {/* //EVENTS */}
                <Route path="/event/*" element={<Error404/>} />
                <Route path="/event/:id/information" element={<Information />} />
                <Route path="/event/:id" element={<Information />} />
                <Route path="/event/:id/golden-book" element={<GoldenBook />} />
                {/* <Route path="/event/:id/fresco" element={<Fresco />} /> */}
                {/* <Route path="/event/:id/fireworks" element={<Fireworks />} /> */}
                {/* <Route path="/event/:id/announce" element={<Announce />} /> */}
                <Route path="/event/:id/guest-list" element={<GuestList />} />
                <Route path="/event/:id/alert" element={<Alert />} />
                <Route path="/event/:id/photo" element={<Photo />} />
                <Route path="/event/:id/playlist" element={<Playlist />} />
                <Route path="/event/:id/modules" element={<Modules />} />
                <Route path="/event/:id/moderation" element={<Moderation />} />
                <Route path="/event/:id/chat" element={<Chat />} />
              </Routes>
            </div>
            <NavbarBottomMobile
              displayMenuProfil={displayMenuProfil}
              setDisplayMenuProfil={setDisplayMenuProfil}
            />
            {modalDiapo ? <ContainerModalDiapo setModalDiapo={setModalDiapo} /> : ''}
          </div>
        </>
      </HideIfNotLogged>
    </>
  );
}

export default App;
