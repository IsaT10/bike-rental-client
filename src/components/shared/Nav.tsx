import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Container from '../Container';
import { nav_sidebarGenerator } from '@/utils/nav_sidebarGenerator';
import { publicRoutes } from '@/routes/publicRoutes';
import { NavClose, NavOpen } from './Icons';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logout } from '@/redux/features/auth/authSlice';

const navItems = nav_sidebarGenerator(publicRoutes);

const Nav = () => {
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  const scrollThreshold = window.innerWidth < 768 ? 150 : 300;
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

  useEffect(() => {
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
      className={`transition-all duration-300  fixed left-0 bg-transparent bg- right-0 z-50 py-3 md:py-5 ${
        scrollY >= scrollThreshold ? 'shadow-md bg-white' : ''
      } ${navVisible ? 'top-0' : '-top-full'}`}
      // className={`transition-all duration-300 ${
      //   location.pathname === '/' ? 'bg-transparent' : 'bg-white shadow-md'
      // } fixed left-0 bg- right-0 z-50 py-3 md:py-5 ${
      //   scrollY >= scrollThreshold ? 'shadow-md bg-white' : ''
      // } ${navVisible ? 'top-0' : '-top-full'}`}
    >
      <Container>
        <div className='flex justify-between items-center'>
          <Link to='/' className='flex items-center gap-3'>
            <h2 className='md:text-3xl text-xl font-bold text-primary-color'>
              GearPro
            </h2>
          </Link>
          <ul className='hidden md:flex  gap-4 lg:gap-6'>
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.path}
                className={({ isActive }) =>
                  `py-2.5 font-medium rounded-md  hover:text-primary-color  cursor-pointer duration-150 ${
                    isActive
                      ? 'text-primary-color'
                      : scrollY <= scrollThreshold
                      ? 'text-white'
                      : 'text-black'
                  }`
                }
              >
                <li>{item.key}</li>
              </NavLink>
            ))}
            <NavLink
              to='/dashboard'
              className={({ isActive }) =>
                `py-2.5 font-medium rounded-md  hover:text-primary-color  cursor-pointer duration-150 ${
                  isActive
                    ? 'text-primary-color'
                    : scrollY <= scrollThreshold
                    ? 'text-white'
                    : 'text-black'
                }`
              }
            >
              <li>Dashboard</li>
            </NavLink>

            {user ? (
              <button
                className='px-8 py-2 sm:text-base text-sm  border mr-6 rounded-[14px]  text-white font-semibold duration-200 '
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <Link to='/login'>
                <button className='px-8 py-2 sm:text-base text-sm border mr-6 rounded-[17px]  text-white font-semibold duration-200 '>
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
              <NavClose />
            ) : (
              <NavOpen
                fill={`${
                  location.pathname === '/' && scrollY <= scrollThreshold
                    ? '#fff'
                    : '#000000'
                }`}
              />
            )}
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`fixed md:hidden left-0 top-0 bottom-0 w-full h-screen bg-white z-50 transition-transform duration-500 ${
              nav ? '-translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className='flex justify-between items-center p-[13px] lg:p-4'>
              <Link
                to='/'
                onClick={() => setNav(false)}
                className='flex items-center gap-3'
              >
                <h2 className='md:text-3xl text-xl font-bold text-brightOrange'>
                  GearPro
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
                    `px-4 py-3 text-stone-900 rounded-md cursor-pointer duration-300 leading-[18px] font-semibold ${
                      isActive ? 'text-black' : 'text-[#698898]'
                    } `
                  }
                >
                  <li>{item.key}</li>
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
