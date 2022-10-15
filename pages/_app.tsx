import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@/assets/styles/globals.scss';
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from '../dev';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DevSupport
      ComponentPreviews={ComponentPreviews}
      useInitialHook={useInitial}
    >
      <Component {...pageProps} />
    </DevSupport>
  );
}

export default MyApp;
