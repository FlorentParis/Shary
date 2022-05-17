import React, {useEffect, useState} from 'react';
import {MessageInterface} from "./interfaces/MessageInterface";
import Auth from './pages/authentification/Auth';

function App() {

  const [message, setMessage] = useState<MessageInterface>({msg: ''});
  const [msg, setMsg] = useState<string>("loading...");

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
    <div>
      {/* {msg} */}
      <Auth />
    </div>
  );
}

export default App;
