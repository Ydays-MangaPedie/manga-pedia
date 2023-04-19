import Slider from '@/components/UI/SliderCard';
import styles from './index.module.scss';
import useFetch from '@/hooks/useFetch';
import { useEffect } from 'react';

const CharacterPage = ({ chara, error }) => {
  if (error)
    return (
      <div>
        <p className={styles.error}>Error: {error.message}</p>
      </div>
    );
  return (
    <div className={styles.container}>
      <Slider images={chara} />
    </div>
  );
};

export default CharacterPage;
