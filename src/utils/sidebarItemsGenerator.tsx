import { TDashboardRouteItems, TSidebarItem2 } from '../types';

// export const sidebarItemsGenerator = (items: TDashboardRouteItems[]) => {
//   const sidebarItems = items.reduce((acc: TSidebarItem2[], item) => {
//     if (item.path && item.name) {
//       acc.push({
//         icon: item.icon,
//         key: item.name,
//         path: item.path,
//       });
//     }

//     if (item.children) {
//       acc.push({
//         icon: item.icon,
//         key: item.name,
//         children: item.children.map((child) => {
//           if (child.name) {
//             return {
//               key: child.name,
//               path: child.path,
//             };
//           }
//         }),
//       });
//     }
//     return acc;
//   }, []);

//   return sidebarItems;
// };

export const sidebarItemsGenerator = (
  items: TDashboardRouteItems[]
): TSidebarItem2[] => {
  return items.map((item) => ({
    icon: item.icon,
    key: item.name,
    path: item.path,
    children: item.children
      ? item.children.reduce<TSidebarItem2[]>((acc, child) => {
          if (child.name && child.path) {
            acc.push({
              key: child.name,
              path: child.path,
            });
          }
          return acc;
        }, [])
      : undefined,
  }));
};
