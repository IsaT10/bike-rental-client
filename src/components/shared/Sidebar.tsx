import { useAppSelector } from '@/redux/hooks';
import { dashboardRoutes } from '@/routes/dashboardRoutes';
import { nav_sidebarGenerator } from '@/utils/nav_sidebarGenerator';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  // const SidebarLinkItems = nav_sidebarGenerator(dashboardRoutes);
  const { user } = useAppSelector((state) => state.auth);
  const SidebarLinkItems = nav_sidebarGenerator(
    dashboardRoutes.filter((route) =>
      route.roles.includes(user?.role || 'user')
    )
  );

  return (
    <div className='flex flex-col gap-4 py-10 w-56 px-4 sticky top-0 left-0 h-screen '>
      <h3 className='text-xl font-bold text-center mb-4'>Dashboard</h3>
      {SidebarLinkItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `py-2.5  font-medium rounded-md text-sm px-6   hover:bg-stone-100  cursor-pointer duration-150 ${
              isActive ? 'bg-stone-100  py-2.5' : 'text-stone-900'
            } `
          }
        >
          <span>{item.key}</span>
        </NavLink>
      ))}
    </div>
  );
}
