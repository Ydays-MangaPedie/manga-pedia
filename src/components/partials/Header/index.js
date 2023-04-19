import styles from './index.module.scss';
import logo from 'p/img/logo.png';

const Index = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo.src} alt="Logo" />
        </div>
      </div>
    </>
  );
};

export default Index;
