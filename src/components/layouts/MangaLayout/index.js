import NavBar from '@/components/partials/NavBar';
import Footer from '@/components/partials/Footer';
import Burger from '@/components/UI/Burger';
import styles from './index.module.scss';
import CharacterPage from '@/pages/manga/[title]/characters';
import ArcPage from '@/pages/manga/[title]/arcs';
import Resume from '@/pages/manga/[title]';
import { useEffect, useState } from 'react';
import useFetch from '@/hooks/useFetch';

const Index = () => {
  const [page, setPage] = useState(0);
  const pages = ['Résumé', 'Personnages', 'Arcs'];
  const [pageToRender, setPageToRender] = useState();

  useEffect(() => {
    switch (page) {
      case 0:
        setPageToRender(<Resume />);
        break;
      case 1:
        setPageToRender(<CharacterPage />);
        break;
      case 2:
        setPageToRender(<ArcPage />);
        break;
      default:
        setPageToRender('erreur');
        break;
    }
  }, [page]);

  return (
    <>
      <div className={styles.menu}>
        <Burger />
      </div>
      <div className={styles.header}>
        <NavBar pages={pages} actualPage={page} setPage={setPage} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>{pageToRender}</div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default Index;
