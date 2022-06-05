export default function HideIfNotLogged({loggedUser, children}) {
    if (!loggedUser.token) {
        return <></>
    }
    return children
}