import { FC } from 'react';

import Menu from '@/components/layout/Navigation/Menu/Menu';

import styles from './Navigation.module.scss';

const Navigation: FC = () => {
  return (
    <div className={styles.navigation}>
      <Menu />
    </div>
  );
};

export default Navigation;
