import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";

export default function Alert() {
    return (
        <>
            <PageBanner imgSrc="./icons/announce-gradient.svg" title="Ecrire une annonce" desc="Annonces ratachées à l'évènement" />
            <PageContainer>
                <div className="page-alert">
                    <div>
                        <div>
                            <img src="./prov/pp.png" />
                            <input type="text" placeholder="Titre" />
                        </div>
                        <div>
                            <select>
                                <option value="">Paragraphe</option>
                            </select>
                            <div className="modif-style-text">
                                <button style={{fontWeight: '700'}}>B</button>
                                <button style={{fontStyle: 'italic'}}>I</button>
                                <button style={{textDecorationLine: 'underline'}}>U</button>
                                <button style={{textDecorationLine: 'line-through'}}>S</button>
                            </div>
                        </div>
                    </div>
                    <form action="">
                        <textarea name="" placeholder="Message..."></textarea>
                        <div>
                            <span>Cancel</span>
                            <button className="btn-send"><img src="./icons/send-plane.svg" /></button>
                        </div>
                    </form>
                </div>
            </PageContainer>
        </>
    )
}