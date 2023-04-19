import styles from './index.module.scss';
import { useState } from 'react';
import discord from 'p/img/discord-logo.png';
import twitter from 'p/img/twitter-logo.png';
import instagram from 'p/img/instagram-logo.png';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.menu}>
      <div className={styles.burger} onClick={toggleMenu}>
        ☰
      </div>
      {isMenuOpen && (
        <div className={styles.close} onClick={toggleMenu}>
          X
        </div>
      )}
      <div
        className={`${styles.items} ${isMenuOpen ? styles.show : ''}`}
        style={{ zIndex: 2 }}
      >
        <div className={styles.item}>
          <a href="/">
            <p>Accueil</p>
          </a>
        </div>
        <div className={styles.item}>
          <a href="https://myanimelist.net/">
            <p>Anime List</p>
          </a>
        </div>
        <div className={styles.item}>
          <a href="/contact">
            <p>Contact</p>
          </a>
        </div>
        <div className={styles.logoContainer}>
          <img
            className={styles.logo}
            src={instagram.src}
            alt="Instagram Logo"
          />
          <img className={styles.logo} src={discord.src} alt="Discord Logo" />
          <img className={styles.logo} src={twitter.src} alt="Twitter Logo" />
        </div>
      </div>
    </div>
  );
};

export default Index;
