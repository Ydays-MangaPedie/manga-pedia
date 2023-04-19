import Arc from '@/components/UI/SilderArc';
import styles from './index.module.scss';
import useFetch from '@/hooks/useFetch';
import { useEffect } from 'react';

const ArcPage = () => {
  const { error, data, fetchData } = useFetch('/arc/?idmanga=1', null, 'GET');

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
      <Arc images={data.data} />
    </div>
  );
};

export default ArcPage;
