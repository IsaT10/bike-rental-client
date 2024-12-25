/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, NavLink } from 'react-router-dom';
import Container from '../Container';
import { nav_sidebarGenerator } from '@/utils/nav_sidebarGenerator';
import { publicRoutes } from '@/routes/publicRoutes';
import { NavClose, NavOpen } from './Icons';
import avatar from '@/assets/images/avatar.png';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logout } from '@/redux/features/auth/authSlice';
import React from 'react';
import { toast } from 'sonner';

import { useGetProfileQuery } from '@/redux/features/user/userApi';
import { LogOutIcon } from 'lucide-react';

const navItems = nav_sidebarGenerator(publicRoutes);

const Nav = () => {
  // const [isDark, setIsDark] = React.useState(true);
  const [scrollY, setScrollY] = React.useState(0);
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [prevScrollY, setPrevScrollY] = React.useState(0);
  const [navVisible, setNavVisible] = React.useState(true);
  const [nav, setNav] = React.useState(false);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { data } = useGetProfileQuery(undefined);

  // const dark = (e: any) => {
  //   e.preventDefault();
  //   document.documentElement.classList.toggle('dark');
  //   setIsDark(!isDark);
  // };

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged out.');
  };
  const { image } = data?.data || {};

  const scrollThreshold = window.innerWidth < 768 ? 150 : 100;
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    if (currentScrollY > scrollThreshold && currentScrollY > prevScrollY) {
      setNavVisible(false); // Hide nav on scroll down
    } else {
      setNavVisible(true); // Show nav on scroll up
    }

    setPrevScrollY(currentScrollY);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav
      className={`transition-all duration-300  fixed left-0  right-0 z-50 py-3 md:py-4 ${
        scrollY >= scrollThreshold
          ? 'shadow-md bg-white dark:bg-secondary-color'
          : ''
      } ${navVisible ? 'top-0' : '-top-full'}`}
      // className={`transition-all duration-300 ${
      //   location.pathname === '/' ? 'bg-transparent' : 'bg-white shadow-md'
      // } fixed left-0 bg- right-0 z-50 py-3 md:py-5 ${
      //   scrollY >= scrollThreshold ? 'shadow-md bg-white' : ''
      // } ${navVisible ? 'top-0' : '-top-full'}`}
    >
      <Container>
        <div className='relative flex justify-between items-center'>
          <Link to='/' className='flex items-center gap-3'>
            <h2 className='md:text-3xl text-xl font-bold tracking-wider text-primary-color'>
              X
              <span
                className={`${
                  scrollY >= scrollThreshold
                    ? ' text-secondary-color dark:text-white'
                    : ' text-white'
                }  `}
              >
                RIDES
              </span>
            </h2>
          </Link>
          <ul className='hidden md:flex  gap-4 lg:gap-6'>
            {/* <button onClick={dark} className='h-10 w-10 mt-0.5 rounded-lg p-2'>
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
            </button> */}

            {navItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.path}
                className={({ isActive }) =>
                  `py-2.5 font-medium rounded-md 900:text-base text-sm  hover:text-primary-color  cursor-pointer duration-150 ${
                    isActive
                      ? 'text-primary-color'
                      : scrollY <= scrollThreshold
                      ? 'text-white'
                      : 'text-black dark:text-white'
                  }`
                }
              >
                <li>{item.key}</li>
              </NavLink>
            ))}

            {user ? (
              <>
                <img
                  onClick={() => setShowDropdown(!showDropdown)}
                  src={image || avatar}
                  className='size-10 border-4 cursor-pointer border-primary-color rounded-full'
                  alt=''
                />
                {showDropdown ? (
                  <div className='bg-white rounded-lg w-[170px] border divide-y divide-stone-300 border-stone-300  flex flex-col absolute right-0 top-14'>
                    <Link
                      to='/dashboard'
                      className='px-5 py-3 text-sm font-medium hover:bg-stone-200 duration-150 rounded-t-lg '
                    >
                      Dashboard
                    </Link>
                    <Link
                      to='/dashboard/profile'
                      className='px-5 py-3 text-sm font-medium hover:bg-stone-200 duration-150 '
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className='px-5 py-3 w-full hover:bg-stone-200 duration-150 rounded-b-lg text-sm font-medium flex items-center justify-between gap-3'
                    >
                      Logout <LogOutIcon size={15} strokeWidth={2.5} />
                    </button>
                  </div>
                ) : (
                  ''
                )}
              </>
            ) : (
              <Link to='/login'>
                <button
                  className={`px-8 py-2 sm:text-base text-sm ${
                    scrollY <= scrollThreshold
                      ? 'text-white '
                      : 'text-black dark:text-stone-50 border-stone-500'
                  } border rounded-[14px] font-semibold duration-200 hover:text-primary-color dark:hover:text-primary-color hover:border-primary-color`}
                >
                  Login
                </button>
              </Link>
            )}
          </ul>

          {/* Mobile Navigation Icon */}
          <div
            onClick={handleNav}
            className='block md:hidden z-50 cursor-pointer'
          >
            {nav ? (
              <div className='pr2'>
                <NavClose />
              </div>
            ) : (
              <NavOpen
                fill={`${scrollY <= scrollThreshold ? '#fff' : '#000000'}`}
              />
            )}
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`fixed md:hidden left-0 top-0 bottom-0 w-full h-screen bg-white z-50 transition-transform duration-500 ${
              nav ? '-translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className='flex justify-between items-center py-3 px-5 '>
              <Link
                to='/'
                onClick={() => setNav(false)}
                className='flex items-center gap-3'
              >
                <h2 className='md:text-3xl text-xl font-bold text-primary-color'>
                  X
                  <span
                    className={`
                         text-secondary-color
                         
                     `}
                  >
                    RIDES
                  </span>
                </h2>
              </Link>
              <div onClick={handleNav} className='cursor-pointer'>
                <NavClose />
              </div>
            </div>

            <ul className='  flex flex-col items-start text-[13px] '>
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  onClick={() => setNav(false)}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-5 py-3  rounded-md cursor-pointer duration-300 leading-[18px] font-semibold ${
                      isActive ? 'text-primary-color' : 'text-secondary-color'
                    } `
                  }
                >
                  <li>{item.key}</li>
                </NavLink>
              ))}

              <NavLink
                onClick={() => setNav(false)}
                to='/dashboard'
                className={({ isActive }) =>
                  `px-5 py-3  rounded-md cursor-pointer duration-300 leading-[18px] font-semibold ${
                    isActive ? 'text-primary-color' : 'text-secondary-color'
                  } `
                }
              >
                <li>Dashboard</li>
              </NavLink>

              {user ? (
                <button
                  onClick={handleLogout}
                  className={`px-4 py-1.5 text-white  rounded-md cursor-pointer duration-300 leading-[18px] font-semibold bg-primary-color ml-6 mt-2`}
                >
                  <li>Logout</li>
                </button>
              ) : (
                <Link
                  onClick={() => setNav(false)}
                  to='/login'
                  className='px-4 py-1.5 text-white  rounded-md cursor-pointer duration-300 leading-[18px] font-semibold bg-primary-color ml-5 mt-2'
                >
                  <li>Login</li>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
