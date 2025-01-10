import { TNavbarItem, TSidebarItem } from '@/types';

export const navbarGenerator = (items: TNavbarItem[]) => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        path: item.path,
      });
    }

    return acc;
  }, []);

  return sidebarItems;
};
