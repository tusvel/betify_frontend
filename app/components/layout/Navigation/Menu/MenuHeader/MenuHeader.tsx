import Link from 'next/link';
import { FC } from 'react';

import Logo from '@/ui/Logo/Logo';

import styles from './MenuHeader.module.scss';

const MenuHeader: FC = () => {
  return (
    <div className={styles.menuHeader}>
      <Link href="/">
        <a className={styles.logo}>
          <Logo />
        </a>
      </Link>
    </div>
  );
};

export default MenuHeader;
