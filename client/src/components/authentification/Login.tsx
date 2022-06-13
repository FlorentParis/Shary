import registerLogin from '../../interfaces/RegisterLogin'


const Login: React.FC<registerLogin> = ({ registerLoginHandler }) => {

    const stateHandler = () => {
        registerLoginHandler()
    }

    return (
        <div>
                <div>
                    <h2>Connectez-vous</h2>
                </div>
                <div>
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
                <div>
                    <button>Connexion</button>
                    <p>Pas encore de compte ? <span onClick={stateHandler}>Inscrivez-vous</span></p>

                </div>
        </div>
    )
}

export default Login