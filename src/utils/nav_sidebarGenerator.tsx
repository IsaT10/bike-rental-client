import { TNavbarItem, TSidebarItem } from '@/types';

export const nav_sidebarGenerator = (items: TNavbarItem[]) => {
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
