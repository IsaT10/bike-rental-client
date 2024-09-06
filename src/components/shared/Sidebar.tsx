import { dashboardRoutes } from '@/routes/dashboardRoutes';
import { nav_sidebarGenerator } from '@/utils/nav_sidebarGenerator';
import { Link, NavLink } from 'react-router-dom';

export default function Sidebar() {
  const SidebarLinkItems = nav_sidebarGenerator(dashboardRoutes);
  return (
    <div className='flex flex-col gap-6'>
      {SidebarLinkItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `py-2.5 font-medium rounded-md text-sm 900:text-base hover:text-orange-500  cursor-pointer duration-150 ${
              isActive ? 'text-orange-500' : 'text-stone-900'
            } `
          }
        >
          <span>{item.key}</span>
        </NavLink>
      ))}
    </div>
  );
}
