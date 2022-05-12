import styles from '../../style/pages/authentification/Auth.module.scss'
import Login from '../../components/authentification/Login'
import Register from '../../components/authentification/Register'

const Auth: React.FC = () => {

    return (
        <>
            <Login />
            <Register />
        </>

    )
}

export default Auth