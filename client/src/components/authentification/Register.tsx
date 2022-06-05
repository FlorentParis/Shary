import registerLogin from '../../interfaces/RegisterLogin'

const Register: React.FC<registerLogin> = ({ registerLoginHandler }) => {

    const stateHandler = () => {
        registerLoginHandler()
    }

    return (
        <div >
                <div >
                    <h2>Inscrivez-vous</h2>
                </div>
                <div >
                    <div>
                        <label htmlFor=""></label>
                        <input type="text" name="" id="" placeholder='Nom' />
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <input type="text" name="" id="" placeholder='Prénom' />
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <input type="text" name="" id="" placeholder='Adresse mail' />
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <input type="text" name="" id="" placeholder='Téléphone' />
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <input type="text" name="" id="" placeholder='Mot de passe' />
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <input type="text" name="" id="" placeholder='Confirmation du mot de passe'/>
                    </div>

                </div>
                <div>
                    <button>Inscription</button>
                    <p>Vous avez déjà un compte ? <span onClick={stateHandler}>Connectez-vous</span></p>
                </div>
        </div>
    )
}

export default Register