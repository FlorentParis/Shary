export default function ModalAddGuest(props: any) {
    return (
        <div className="modal-add-guest">
            <div>
                <span>Ajouter un nouveau participants</span>
                <p>Renseigner le mail de l'invité</p>
                <input type="text" placeholder="exemple@shary.com"/>
                <button>Envoyer l'invitation</button>
                <img onClick={() => props.close(false)} src="./icons/cross-black.svg" />
            </div>
        </div>
    )
}