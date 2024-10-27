/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppSelector } from '@/redux/hooks';
import { dashboardRoutes } from '@/routes/dashboardRoutes';
import { nav_sidebarGenerator } from '@/utils/nav_sidebarGenerator';
import { MenuIcon } from 'lucide-react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Sidebar() {
  const [isDark, setIsDark] = React.useState(true);
  const dark = (e: any) => {
    e.preventDefault();
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

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
        className={`fixed top-0 left-0 h-screen 900:w-56 lg:w-64 shadow-2xl dark:bg-secondary-color bg-white py-9 px-4  z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } 900:translate-x-0 900:w-56 lg:w-64 flex flex-col gap-4`}
      >
        <div className='flex justify-between items-center mb-4'>
          <Link to='/'>
            <h2 className='text-xl font-bold tracking-wider text-primary-color '>
              X
              <span className=' text-secondary-color dark:text-white'>
                RIDES
              </span>
            </h2>
          </Link>
          <button onClick={dark} className='h-10 w-10 mt-0.5 rounded-lg p-2'>
            <svg
              className='fill-primary-color block dark:hidden'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'></path>
            </svg>
            <svg
              className='fill-yellow-500 hidden dark:block'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                fillRule='evenodd'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        {SidebarLinkItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `py-2.5 font-medium rounded-md text-sm px-6 hover:bg-primary-color hover:text-white cursor-pointer duration-150 ${
                isActive
                  ? 'bg-primary-color text-white py-2.5'
                  : 'text-stone-900 dark:text-stone-200'
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
