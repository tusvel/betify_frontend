import { FC, PropsWithChildren } from 'react';

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default MainProvider;
