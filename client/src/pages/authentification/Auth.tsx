import styles from '../../style/pages/authentification/Auth.module.scss'
import Login from '../../components/authentification/Login'
import Register from '../../components/authentification/Register'

const Auth: React.FC = () => {

    return (
        <div className={styles.container}>

            <div className={styles.tagline}>
                <h1>Vivez des évènements uniques !</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aenean ultriches semper velit sed maximus. Donec accumsan quam nisi, sit amet ornare metus viverra.</p>
            </div>
            <div>
            <Login />
            </div>
        </div>

    )
}

export default Auth