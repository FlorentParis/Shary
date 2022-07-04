import React, {useEffect, useState} from 'react';
import Auth from './pages/authentification/Auth';
import {Routes, Route, Navigate} from 'react-router-dom';
import {setEventsData} from "./features/eventsSlice";

/* Pages */
import Homepage from './pages/homepage';
import Profil from './pages/profil';
import EventToCome from './pages/event-to-come';
import EventPass from './pages/event-pass';
import GuestList from './pages/guest-list';
import Modules from './pages/modules';
import Alert from './pages/alert';
import Information from './pages/information';
import Moderation from './pages/moderation';
import Settings from './pages/settings';
import Contact from './pages/contact-us';
import Photo from './pages/photo';
import GoldenBook from './pages/golden-book';
import Playlist from './pages/playlist';

/* Components */
import NavbarLeft from './components/navbar/vertical/NavbarVertical';
import NavbarTop from './components/navbar/top/NavbarTop';
import BurgerMenu from './components/navbar/burger-menu/BurgerMenu';
import HideIfLogged from './components/common/HideIfLogged';
import HideIfNotLogged from './components/common/HideIfNotLogged';

/* Interfaces */
import NavbarBottomMobile from './components/navbar/bottomMobile/NavbarBottomMobile';
import MenuProfil from './components/navbar/top/MenuProfil';

/* Hooks */
import useGetEvents from './hooks/useGetEvents';
import { useAppDispatch } from './hooks/reduxHooks';

function App() {

  const [needsUpdate, setNeedsUpdate] = useState<boolean>(false);

  const dispatch = useAppDispatch()
  const [displayMenuProfil, setDisplayMenuProfil] = useState<boolean>(false);

  const closeProfile = () => {
    if (displayMenuProfil === true) {
      setDisplayMenuProfil(false)
    }
  }

  const getEvents = useGetEvents();

  useEffect(() => {
    getEvents()
    .then(res => {
      dispatch(setEventsData(res))
    })
  }, [needsUpdate])

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
          <NavbarTop displayMenuProfil={displayMenuProfil} setDisplayMenuProfil={setDisplayMenuProfil} />
          {displayMenuProfil ? <MenuProfil />: ''}
          {displayMenuProfil ? <BurgerMenu /> : '' }
          <div className="content-layout" onClick={closeProfile}>
            <NavbarLeft />
            <div className="main-layout" >
              <Routes>
                <Route path="/*" element={<Navigate to="/" />} />
                <Route path="/" element={<Homepage />} />
                <Route path="/event-to-come" element={<EventToCome />} />
                <Route path="/golden-book" element={<GoldenBook />} />
                <Route path="/event-pass" element={<EventPass />} />
                <Route path="/information" element={<Information />} />
                <Route path="/guest-list" element={<GuestList />} />
                <Route path="/alert" element={<Alert />} />
                <Route path="/photo" element={<Photo />} />
                <Route path="playlist" element={<Playlist />} />
                <Route path="/modules" element={<Modules />} />
                <Route path="/moderation" element={<Moderation />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/contact-us" element={<Contact />} />
              </Routes>
            </div>
            <NavbarBottomMobile displayMenuProfil={displayMenuProfil} setDisplayMenuProfil={setDisplayMenuProfil}/>
          </div>
        </>
      </HideIfNotLogged>
    </>
  );
}

export default App;
