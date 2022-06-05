export default function HideIfLogged({loggedUser, children}) {
    if (loggedUser.token) {
        return <></>
    }
    return children
}