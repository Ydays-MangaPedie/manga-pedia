import Header from '@/components/partials/Header';
import Footer from '@/components/partials/Footer';
import Burger from '@/components/UI/Burger';
import styles from './index.module.scss';
import { useEffect } from 'react';

const Index = ({ children }) => {
  useEffect(() => {
    function handleResize() {
      console.log('Window width:', window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
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
