import styles from './index.module.scss';
import logo from 'p/img/logo.png';

const Index = ({ pages, actualPage, setPage }) => {
  return (
    <>
      <div className={styles.navigation}>
        <a href="/">
          {' '}
          <img src={logo.src} alt="Logo" className={styles.logo} />
        </a>

        <ul className={styles.navList}>
          {pages.map((navItem, id) => {
            const isActive = actualPage === id;
            return (
              <li key={id}>
                <button
                  type="button"
                  className={`${styles.navItem} ${isActive && styles.active}`}
                  onClick={() => setPage(id)}
                >
                  <p>{navItem}</p>
                  {isActive && <div className={styles.activeIndicator} />}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Index;
