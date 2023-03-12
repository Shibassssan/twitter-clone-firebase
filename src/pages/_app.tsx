import { AppProps } from 'next/app';
import Head from 'next/head';
import { global } from '../styles/global';
import '../Firebase';
import { Global } from '@emotion/react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Global styles={global} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;