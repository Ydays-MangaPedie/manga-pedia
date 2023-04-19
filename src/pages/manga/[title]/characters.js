import Slider from '@/components/UI/SliderCard';
import styles from './index.module.scss';
import useFetch from '@/hooks/useFetch';
import { useEffect } from 'react';

const CharacterPage = () => {
  const { error, data, fetchData } = useFetch(
    '/character/?id_manga=1',
    null,
    'GET'
  );

  useEffect(() => {
    fetchData();
  }, []);

  if (error)
    return (
      <div>
        <p className={styles.error}>Error: {error.message}</p>
      </div>
    );
  return (
    <div className={styles.container}>
      <Slider images={data.data} />
    </div>
  );
};

export default CharacterPage;
