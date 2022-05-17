import styles from '../../style/pages/authentification/Auth.module.scss'
import Login from '../../components/authentification/Login'
import Register from '../../components/authentification/Register'
import ReactDOM from "react-dom/client";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const Auth: React.FC = () => {

    const [state, setState] = useState<boolean>(false)

    const registerLoginHandler = () => {
        setState(!state)
    }

    return (
        <div className={styles.container}>

            <div className={styles.tagline}>
                <h1>Vivez des évènements uniques !</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenean ultriches semper velit sed maximus. Donec accumsan quam nisi, sit amet ornare metus viverra.</p>
            </div>
            {/* <BrowserRouter>
                <Routes>
                    <Route to="" />
                </Routes>
            </BrowserRouter> */}
            <div>
                {state &&  <Register registerLoginHandler={registerLoginHandler} />}
                {!state && <Login registerLoginHandler={registerLoginHandler} />}
            </div>
        </div>

    )
}

export default Auth