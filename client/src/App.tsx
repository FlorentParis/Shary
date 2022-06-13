import React, {useEffect, useState} from 'react';
import Auth from './pages/authentification/Auth';
import {Routes, Route} from 'react-router-dom';
import HideIfLogged from './components/common/HideIfLogged';
import HideIfNotLogged from './components/common/HideIfNotLogged';

/* Pages */
import Homepage from './pages/homepage';
import Profil from './pages/profil';

/* Components */
import NavbarLeft from './components/navbar/vertical/NavbarVertical';
import NavbarTop from './components/navbar/top/NavbarTop';

/* Interfaces */
import UserInterface from './interfaces/UserInterface';
import NavbarBottomMobile from './components/navbar/bottomMobile/NavbarBottomMobile';
import EventToCome from './pages/event-to-come';
import EventPass from './pages/event-pass';
import GuestList from './pages/guest-list';
import Modules from './pages/modules';
import Alert from './pages/alert';
import Information from './pages/information';
import Moderation from './pages/moderation';
import MenuProfil from './components/navbar/top/MenuProfil';

function App() {

  const [displayMenuProfil, setDisplayMenuProfil] = useState<boolean>(false);
  const [loggedUser, setLoggedUser] = useState<UserInterface>({
    status: 'error',
    mail: '',
    token: 'dzadz'
  });

  const closeProfile = () => {
    if (displayMenuProfil == true) {
      setDisplayMenuProfil(false)
    }
  }


  return (
    <>
      <HideIfLogged loggedUser={loggedUser}>
        <Routes>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </HideIfLogged>
      <HideIfNotLogged loggedUser={loggedUser}>
        <>
          <NavbarTop displayMenuProfil={displayMenuProfil} setDisplayMenuProfil={setDisplayMenuProfil} />
          {displayMenuProfil ? <MenuProfil />: ''}
          <div className="content-layout" onClick={closeProfile}>
            <NavbarLeft />
            <div className="main-layout" >
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/event-to-come" element={<EventToCome />} />
                <Route path="event-pass" element={<EventPass />} />
                <Route path="information" element={<Information />} />
                <Route path="guest-list" element={<GuestList />} />
                <Route path="alert" element={<Alert />} />
                <Route path="modules" element={<Modules />} />
                <Route path="moderation" element={<Moderation />} />
              </Routes>
            </div>
            <NavbarBottomMobile />
          </div>
        </>
      </HideIfNotLogged>
    </>
  );
}

export default App;
