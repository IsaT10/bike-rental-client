import { useAppSelector } from '@/redux/hooks';
import { dashboardRoutes } from '@/routes/dashboardRoutes';
import { nav_sidebarGenerator } from '@/utils/nav_sidebarGenerator';
import { MenuIcon } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  // const SidebarLinkItems = nav_sidebarGenerator(dashboardRoutes);
  const { user } = useAppSelector((state) => state.auth);
  const SidebarLinkItems = nav_sidebarGenerator(
    dashboardRoutes.filter((route) =>
      route.roles.includes(user?.role || 'user')
    )
  );

  const [isOpen, setIsOpen] = React.useState(false);

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      {/* Hamburger Icon - Visible only on small screens */}
      <div className='900:hidden fixed w-12 pt-2.5 pl-2.5 bg-primary-color h-screen z-30'>
        <MenuIcon
          onClick={toggleSidebar}
          className='text-3xl cursor-pointer text-green-50'
        />
      </div>

      {/* Sidebar - Hidden on small screens, visible on larger screens */}
      <div
        className={`fixed top-0 left-0 h-screen 900:w-56 lg:w-64  bg-white py-10 px-4  z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } 900:translate-x-0 900:w-56 lg:w-64 flex flex-col gap-4`}
      >
        <h3 className='text-xl font-bold text-center mb-4'>Dashboard</h3>
        {SidebarLinkItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `py-2.5 font-medium rounded-md text-sm px-6 hover:bg-primary-color hover:text-white cursor-pointer duration-150 ${
                isActive
                  ? 'bg-primary-color text-white py-2.5'
                  : 'text-stone-900'
              }`
            }
            onClick={() => setIsOpen(false)} // Close the sidebar when a link is clicked
          >
            <span>{item.key}</span>
          </NavLink>
        ))}
      </div>

      {isOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden'
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}
