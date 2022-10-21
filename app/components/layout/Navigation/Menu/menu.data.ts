import { IMenu } from '@/components/layout/Navigation/Menu/MenuList/menu-list.interface';

export const firstMenu: IMenu = {
  items: [
    {
      title: 'Home',
      icon: 'MdHome',
      link: '/'
    },
    {
      title: 'Search',
      icon: 'MdSearch',
      link: '/search'
    },
    {
      title: 'Your library',
      icon: 'MdApps',
      link: '/library'
    }
  ]
};

export const secondMenu: IMenu = {
  items: [
    {
      title: 'Create playlist',
      icon: 'MdAdd',
      link: '/create-playlist'
    },
    {
      title: 'Liked Songs',
      icon: 'MdFavorite',
      link: '/liked-songs'
    },
    {
      title: 'History',
      icon: 'MdHistory',
      link: '/history'
    },
    {
      title: 'Trending now',
      icon: 'MdTrendingUp',
      link: '/liked-songs'
    }
  ]
};

export const menus: IMenu[] = [firstMenu, secondMenu];
