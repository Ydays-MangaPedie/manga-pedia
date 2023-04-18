import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  return (
    <>
      {router.asPath.startsWith('/manga/naruto') ? (
        <div>naruto</div>
      ) : (
        <div>Bohnomme triste</div>
      )}
      ;
    </>
  );
};

export default Index;
