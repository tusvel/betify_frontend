import Head from 'next/head';
import NextProgressBar from 'nextjs-progressbar';
import { FC, PropsWithChildren } from 'react';

const HeadProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NextProgressBar
        color="#FFFFFF"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0"
        />
        <meta name="theme-color" content="#B2B2B2" />
        <meta name="msapplication-navbutton-color" content="#B2B2B2" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#B2B2B2" />
        <title></title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {children}
    </>
  );
};

export default HeadProvider;
