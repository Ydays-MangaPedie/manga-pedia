import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  const imageId = router?.location?.state?.imageId;

  return <div>The image ID is: {imageId}</div>;
};

export default Index;
