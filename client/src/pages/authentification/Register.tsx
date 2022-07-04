import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../../features/userConnectedSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";
import UserInterface from "../../interfaces/UserInterface";

export default function Register() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [formInput, setFormInput] = useState<UserInterface>({
        email: '',
        password: '',
        lastname: '',
        firstname: '',
    })

    const handleChange = ({target}: any) => {
        setFormInput((prev: any) => ({
            ...prev,
            [target.name]: target.value
        }))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(signupUser(formInput));
        navigate('/');
    };
    const fileHandler = (e: any) => {
        setFile(e.target.value)
        (e.target.value)
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
                <div >
                    <div>
                        <label htmlFor=""></label>
                        <input onChange={nameHandler} type="text" name="" id="" placeholder='Nom' />
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
                    <div>
                    <label htmlFor="image">Upload Image</label>
                        <input type="file" id="image" name="value" onChange={fileHandler} required/>
                    </div>

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
    ) */

    return (
        <>
            <h2>Inscription</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="lastname" placeholder='Nom*' required/>
                <input onChange={handleChange} type="text" name="firstname" placeholder='Prénom*' required/>
                <input onChange={handleChange} type="mail" name="email" placeholder='Adresse mail*' required/>
                <input onChange={handleChange} type="phone" name="" placeholder='Téléphone' />
                <input onChange={handleChange} type="password" name="password" placeholder='Mot de passe*' required/>
                <input onChange={handleChange} type="password" name="passwordConfirm" placeholder='Confirmation du mot de passe*' required/>
                <div>
                    <input onChange={handleChange} type="checkbox" name="newsletter" />
                    <p>En cochant cette case, j’accepte de recevoir par mail les dernières nouveautés de Shary.</p>
                </div>
                <button>Inscription</button>
            </form>
            <p>Vous avez déjà un compte ? <Link to="/auth/login">Connectez-vous</Link></p>
        </>
    )
}