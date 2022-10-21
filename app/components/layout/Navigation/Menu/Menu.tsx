import cn from 'classnames';
import { FC } from 'react';

import MenuHeader from '@/components/layout/Navigation/Menu/MenuHeader/MenuHeader';
import MenuList from '@/components/layout/Navigation/Menu/MenuList/MenuList';
import { menus } from '@/components/layout/Navigation/Menu/menu.data';

import styles from './Menu.module.scss';

const Menu: FC = () => {
  return (
    <div className={cn(styles.menu)}>
      <MenuHeader />
      {menus.map((menu) => (
        <MenuList key={menu.title} menu={menu} />
      ))}
    </div>
  );
};

export default Menu;
