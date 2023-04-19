import { useRouter } from 'next/router';
import MainLayout from '@/components/layouts/MainLayout';
import MangaLayout from '@/components/layouts/MangaLayout';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {router.asPath.startsWith('/manga') ? (
        <MangaLayout>
          <Component {...pageProps} />
        </MangaLayout>
      ) : (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )}
    </>
  );
}
