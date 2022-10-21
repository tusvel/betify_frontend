import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { IMenuItem } from '@/components/layout/Navigation/Menu/MenuList/MenuItem/menu-item.interface';

import MaterialIcons from '@/ui/icons/MaterialIcons';

import styles from './MenuItem.module.scss';

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
  const { asPath } = useRouter();

  return (
    <div
      className={cn(styles.menuItem, {
        [styles.active]: asPath === item.link
      })}
    >
      <Link href={item.link}>
        <a className={styles.menuItemLink}>
          <span className={styles.menuIcon}>
            <MaterialIcons name={item.icon} />
          </span>
          <span>{item.title}</span>
        </a>
      </Link>
    </div>
  );
};

export default MenuItem;
