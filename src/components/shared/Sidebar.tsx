import { dashboardRoutes } from '@/routes/dashboardRoutes';
import { nav_sidebarGenerator } from '@/utils/nav_sidebarGenerator';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const SidebarLinkItems = nav_sidebarGenerator(dashboardRoutes);
  return (
    <div className='flex flex-col gap-6'>
      {SidebarLinkItems.map((item) => (
        <Link to={item.path}>{item.key}</Link>
      ))}
    </div>
  );
}
