import { useRouter } from 'next/router';
import styles from './index.module.scss';
import naruto from 'p/img/naruto.png';


const Index = () => {
  const router = useRouter();
  return (
    <>
      {router.asPath.startsWith('/manga/naruto') ? (
        <div className={styles.page}>
          <div className={styles.resume}>
            <div className={styles.title}>
              <p>NARUTO</p>
            </div>
            <hr className={styles.whiteline}></hr>
            <h1>Résumé</h1>
            <p>Naruto est un jeune ninja qui rêve de devenir Hokage, le chef de son village. Mais pour y parvenir, il devra affronter de nombreux ennemis et surmonter bien des épreuves.</p>
          </div>
          <div className={styles.image}>
            <img className={styles.logo} src={naruto.src} alt="NarutoImage" />
          </div>
        </div>

      ) : (
        <div className={styles.no_info}>
          <h1>Oh non !</h1>
          <h2>Il semblerait qu'il n'y ait pas encore d'informations disponibles sur cette page :(</h2>
        </div>
      )}
      ;
    </>
  );
};

export default Index;
