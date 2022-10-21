import { DevSupport } from '@react-buddy/ide-toolbox';
import type { AppProps } from 'next/app';

import '@/assets/styles/globals.scss';

import MainProvider from '../app/providers/MainProvider';
import { ComponentPreviews, useInitial } from '../dev';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DevSupport
      ComponentPreviews={ComponentPreviews}
      useInitialHook={useInitial}
    >
      <MainProvider>
        <Component {...pageProps} />
      </MainProvider>
    </DevSupport>
  );
}

export default MyApp;
