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

  const prevIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
  const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;

  const handleImageClick = () => {
    router.push(
      {
        pathname: `/manga/${images[activeIndex].title
          .toLowerCase()
          .split(' ')
          .join('_')}`,
        state: { imageId: images[activeIndex].id },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div className={styles.carousel}>
      <button
        className={`${styles.button} ${styles.prev}`}
        onClick={handlePrev}
      >
        {'\u2190'}
      </button>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img
            src={images[prevIndex].image_url}
            alt={images[prevIndex].title}
          />
        </div>
        <div
          className={`${styles.card} ${styles.active}`}
          onClick={handleImageClick}
        >
          <img
            src={images[activeIndex].image_url}
            alt={images[activeIndex].title}
          />
        </div>
        <div className={styles.card}>
          <img
            src={images[nextIndex].image_url}
            alt={images[nextIndex].title}
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
  );
};

export default Index;
