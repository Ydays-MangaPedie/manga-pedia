import React, { useState } from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Index = ({ images }) => {
  const router = useRouter();
  if (!images || images.length === 0) {
    return (
      <div className={styles.parent}>
        <p className={styles.error}>No images to display.</p>
      </div>
    );
  }
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  return (
    <>
      {router.asPath.startsWith('/manga/naruto') ? (
        <div className={styles.slider}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>{images[activeIndex].nom}</h1>
            <p className={styles.para}>Manga :</p>
            <p className={styles.para}>
              Chapitre {images[activeIndex].debut_chapitre} à chapitre{' '}
              {images[activeIndex].fin_chapitre}
            </p>
            <p className={styles.para}>Manga :</p>
            <p className={styles.para}>
              Épisode {images[activeIndex].debut_episode} à épisode{' '}
              {images[activeIndex].fin_episode}
            </p>
          </div>
          <div className={styles.contentContainer}>
            <button
              className={`${styles.button} ${styles.prev}`}
              onClick={handlePrev}
            >
              {'\u2190'}
            </button>
            <div className={styles.cardContainer}>
              <div className={`${styles.card} ${styles.active}`}>
                <img
                  src={images[activeIndex].imgURL}
                  alt={images[activeIndex].title}
                />
              </div>
            </div>
            <button
              className={`${styles.button} ${styles.next}`}
              onClick={handleNext}
            >
              {'\u2192'}
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.no_info}>
          <h1>Oh non !</h1>
          <h2>
            Il semblerait qu'il n'y ait pas encore d'informations disponibles
            sur cette page :(
          </h2>
        </div>
      )}
    </>
  );
};

export default Index;
