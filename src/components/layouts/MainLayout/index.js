import Header from '@/components/partials/Header';
import Footer from '@/components/partials/Footer';
import Burger from '@/components/UI/Burger';
import styles from './index.module.scss';

const Index = ({ children }) => {
  return (
    <>
      <div className={styles.menu}>
        <Burger />
      </div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>{children}</div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default Index;
