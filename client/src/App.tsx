import React, {useEffect, useState} from 'react';
import {MessageInterface} from "./interfaces/MessageInterface";
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

function App() {

  const [message, setMessage] = useState<MessageInterface>({msg: ''});
  const [msg, setMsg] = useState<string>("loading...");
  const [loggedUser, setLoggedUser] = useState<UserInterface>({
    status: 'error',
    mail: '',
    token: 'dzadz'
  });

  return (
    <>
      <HideIfLogged loggedUser={loggedUser}>
        <Routes>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </HideIfLogged>
      <HideIfNotLogged loggedUser={loggedUser}>
        <NavbarTop />
        <div className="content-layout">
          <NavbarLeft />
          <div className="main-layout">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/profil" element={<Profil />} />
            </Routes>
          </div>
          <NavbarBottomMobile />
        </div>
      </HideIfNotLogged>
    </>
  );
}

export default App;
