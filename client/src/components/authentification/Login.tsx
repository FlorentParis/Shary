import styles from '../../style/pages/authentification/Login.module.scss'
import registerLogin from '../../interfaces/RegisterLogin'


const Login: React.FC<registerLogin> = ({ registerLoginHandler }) => {

    const stateHandler = () => {
        registerLoginHandler()
    }

    return (
        <div className={styles.container}>
                <div className={styles.title}>
                    <h2>Connectez-vous</h2>
                </div>
                <div className={styles.form}>
                    <div>
                        <label htmlFor=""></label>
                        <input type="text" name="" id="" placeholder='Identifiant/Adresse mail' />
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <input type="text" name="" id="" placeholder='Mot de passe' />
                    </div>
                    <div>
                        <p>Mot de passe oublié ?</p>
                    </div>
                    
                </div>
                <div className={styles.connection}>
                    <button>Connexion</button>
                    <p>Pas encore de compte ? <span onClick={stateHandler}>Inscrivez-vous</span></p>

                </div>
        </div>
    )
}

export default Login