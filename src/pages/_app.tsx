import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global';
import '../Firebase';


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;