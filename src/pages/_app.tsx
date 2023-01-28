import Head from 'next/head';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import Layout from 'containers/Layout';
import AppContext from 'context/AppContext';
import useInitialState from 'hooks/useInitialState';
import 'styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <Layout>
        <Head>
          <title>Fashion Shop</title>
        </Head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-MTN5T9CR99" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-MTN5T9CR99');`}
        </Script>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}
