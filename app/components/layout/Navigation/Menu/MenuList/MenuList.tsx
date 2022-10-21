import { FC } from 'react';

import MenuItem from '@/components/layout/Navigation/Menu/MenuList/MenuItem/MenuItem';
import { IMenu } from '@/components/layout/Navigation/Menu/MenuList/menu-list.interface';

import styles from './MenuList.module.scss';

const MenuList: FC<{ menu: IMenu }> = ({ menu }) => {
  return (
    <div className={styles.menuList}>
      {menu.title && menu.title}
      {menu.items.map((item) => (
        <MenuItem key={item.link} item={item} />
      ))}
    </div>
  );
};

export default MenuList;
