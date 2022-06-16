import UserInterface from "../../interfaces/UserInterface"

interface HideIfLoggedPropsInterface {
    loggedUser: UserInterface,
    children: JSX.Element
}

export default function HideIfLogged({loggedUser, children}: HideIfLoggedPropsInterface) {
    if (loggedUser.token) {
        return <></>
    }
    return children
}