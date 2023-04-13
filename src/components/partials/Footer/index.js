import styles from './index.module.scss';
import discord from 'p/img/discord-logo.png';
import twitter from 'p/img/twitter-logo.png';
import instagram from 'p/img/instagram-logo.png';

const Index = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.line}></div>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logo}
            src={instagram.src}
            alt="Instagram Logo"
          />
          <img className={styles.logo} src={discord.src} alt="Discord Logo" />
          <img className={styles.logo} src={twitter.src} alt="Twitter Logo" />
        </div>
        <div className={styles.text}>
          <p>&copy; mangapédie</p>
        </div>
        <div className={styles.button}>
          <a href="/about">Qui sommes nous?</a>
        </div>
      </div>
    </div>
  );
};

export default Index;
