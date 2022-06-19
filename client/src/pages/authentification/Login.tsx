import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <h2>Connectez-vous</h2>
            <form>
                <input type="mail" name="" id="" placeholder='Adresse mail*' />
                <input type="password" name="" id="" placeholder='Mot de passe*' />
                <Link to="">Mot de passe oublié ?</Link>
                <button>Connexion</button>
            </form>
            <p>Pas encore de compte ? <Link to="/auth/register">Inscrivez-vous</Link></p>
        </>
    )
}