import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/store/store';

import HeadProvider from './HeadProvider';
import ReduxToastr from './ReduxToastr';

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <HeadProvider>
        <Provider store={store}>
          <ReduxToastr />
          {children}
        </Provider>
      </HeadProvider>
    </>
  );
};

export default MainProvider;
