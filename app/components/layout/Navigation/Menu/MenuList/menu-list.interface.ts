import { IMenuItem } from '@/components/layout/Navigation/Menu/MenuList/MenuItem/menu-item.interface';

export interface IMenu {
  title?: string;
  items: IMenuItem[];
}
