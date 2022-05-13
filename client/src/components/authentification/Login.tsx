import styles from '../../style/pages/authentification/Login.module.scss'


const Login: React.FC = () => {
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
                    <p>Mot de passe oublié ?</p>

                </div>

            </div>
            <div className={styles.connection}>
                <button>Connexion</button>
                <p>Pas encore de compte ? Inscrivez-vous</p>
            </div>
        </div>
    )
}

export default Login