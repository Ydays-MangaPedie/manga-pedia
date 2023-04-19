import Title from '@/components/UI/Title';
import Carousel from '@/components/UI/Carrousel';
import useFetch from '@/hooks/useFetch';
import { useEffect } from 'react';

export default function Home() {
  const { error, data, fetchData } = useFetch('/manga', null, 'GET');

  useEffect(() => {
    fetchData();
  }, []);

  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Title
          level="h1"
          title="BIENVENUE SUR MANGAPÉDIE"
          className="h2"
          size="big"
        />
      </div>
      <Carousel images={data.data} />
    </>
  );
}
