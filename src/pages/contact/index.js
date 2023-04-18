import styles from './index.module.scss';
import pen from 'p/img/contact.png';

const Contact = () => {
    return (
      <>
        <div className={styles.contact}>
            <div className={styles.title}>
                <img className={styles.logo} src={pen.src} alt="Pen Logo" />
                <h1>Contactez-nous</h1>
            </div>
            <div className={styles.formulaire}>
                <form>
                    <div className={styles.noms}>
                        <input type="text" name="nom" placeholder="Nom"/>
                        <input style={{ marginLeft: '158px' }} type="text" name="prenom" placeholder="Prenom"/>
                    </div>
                    <input type="email" name="email" placeholder="Email"/><br></br>
                    <textarea name="input" id="input" placeholder="Votre message" cols="124" rows="5"></textarea><br></br>
                    <div className={styles.button}>
                        <a href="/">Envoyer</a>
                    </div>
                </form>
            </div>
        </div>
      </>
    );
};

export default Contact;