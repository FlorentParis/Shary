import React, {useEffect, useState} from 'react';
import {MessageInterface} from "./interfaces/MessageInterface";
import Auth from './pages/authentification/Auth';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

/* Pages */
import Homepage from './pages/homepage';
import UserInterface from './interfaces/UserInterface';

function App() {

  const [message, setMessage] = useState<MessageInterface>({msg: ''});
  const [msg, setMsg] = useState<string>("loading...");
  const [user, setUser] = useState<UserInterface>({
    firstName: "",
    lastName: "",
    email: "",
    telephone: 0,
    password: "",
    passwordConfirm: ""
  });

  useEffect(() => {
    fetch("http://localhost:3001/api")
    .then(res => res.json())
    .then(data => setMessage(data))
  }, [])

  useEffect(() => {
    if(message.msg != ''){
      setMsg(message.msg);
    }
  }, [message]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
