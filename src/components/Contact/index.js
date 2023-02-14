import "./Contact.css"


function Contact() {
    return (
        <>
        <div className="contact">
            <h1>Contactez-nous</h1>
            <div className="formulaire">
                <form>
                    {/* <div className="inputs"> */}
                    <div className="noms">
                        <input type="text" name="nom" placeholder="Nom"/>
                        <input style={{ marginLeft: '158px' }} type="text" name="prenom" placeholder="Prenom"/>
                    </div>
                    <input type="email" name="email" placeholder="Email"/><br></br>
                    <textarea name="input" id="input" placeholder="Votre message" cols="124" rows="5"></textarea><br></br>
                    {/* </div> */}
                    <button>Envoyer</button>
                </form>
            </div>
        </div>

        </>
    )
}

export default Contact;