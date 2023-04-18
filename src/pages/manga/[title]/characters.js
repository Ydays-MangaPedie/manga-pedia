import Slider from '@/components/UI/SliderCard';
import styles from './index.module.scss';
import useFetch from '@/hooks/useFetch';
import { useEffect } from 'react';

const CharacterPage = () => {
  const { error, data, fetchData } = useFetch(
    '/character/?idmanga=1',
    null,
    'GET'
  );

  useEffect(() => {
    fetchData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;

  <div className={styles.container}>
    <Slider characters={data} />
  </div>;
  <div>No characters to display</div>;
};

export default CharacterPage;
