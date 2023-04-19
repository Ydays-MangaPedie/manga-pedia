import React from 'react';
import styles from './index.module.scss';

const Index = ({ data }) => {
  return (
    <div className={styles.card}>
      <img src={data.imgURL} alt={title} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{data.nom}</h3>
        <p className={styles.cardDescription}>{data.desc_perso}</p>
      </div>
    </div>
  );
};

export default Index;
