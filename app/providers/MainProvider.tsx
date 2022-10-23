import { FC, PropsWithChildren } from 'react';

import ReduxToastr from './ReduxToastr';

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ReduxToastr />
      {children}
    </>
  );
};

export default MainProvider;
