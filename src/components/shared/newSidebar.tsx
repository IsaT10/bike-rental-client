// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useAppSelector } from '@/redux/hooks';
// import { MenuIcon } from 'lucide-react';
// import React, { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import logo from '@/assets/images/logo.png';
// import { sidebarItemsGenerator } from '@/utils/sidebarItemsGenerator';
// import { userPaths } from '@/routes/user.routes';
// import { DownArrow } from './Icons';
// import { adminPaths } from '@/routes/admin.routes';

// export default function Sidebar() {
//   const { user } = useAppSelector((state) => state.auth);
//   const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

//   let sidebarItems;

//   switch (user?.role) {
//     case 'admin':
//       sidebarItems = sidebarItemsGenerator(adminPaths);
//       break;
//     case 'user':
//       sidebarItems = sidebarItemsGenerator(userPaths);
//       break;

//     default:
//       break;
//   }

//   const [isOpen, setIsOpen] = React.useState(false);

//   // Toggle the sidebar visibility
//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleMenu = (key: string) => {
//     setOpenMenus((prevState) => ({
//       ...prevState,
//       [key]: !prevState[key],
//     }));
//   };

//   return (
//     <div className='relative '>
//       {/* Hamburger Icon - Visible only on small screens */}
//       <div className='900:hidden fixed w-12 pt-2.5 pl-2.5 bg-primary-color h-screen z-30'>
//         <MenuIcon
//           onClick={toggleSidebar}
//           className='text-3xl cursor-pointer text-green-50'
//         />
//       </div>

//       {/* Sidebar - Hidden on small screens, visible on larger screens */}
//       <div
//         className={`fixed overflow-y-auto top-0 left-0 h-screen 900:w-56 lg:w-64 border-r border-stone-200  dark:bg-secondary-color bg-white py-9 px-4  z-40 transform transition-transform duration-300 ease-in-out ${
//           isOpen ? 'translate-x-0' : '-translate-x-full'
//         } 900:translate-x-0 900:w-56 lg:w-64 flex flex-col gap-4`}
//       >
//         <Link className='flex justify-start gap-1 items-center mb-4' to='/'>
//           <img className='size-7' src={logo} alt='' />
//           <h2 className='text-2xl font-bold tracking-wider text-primary-color '>
//             X
//             <span className=' text-secondary-color dark:text-white'>RIDES</span>
//           </h2>
//         </Link>

//         <div className='flex flex-col gap-3 w-full text-[15px] text-black font-medium'>
//           {sidebarItems?.map((item, idx) => (
//             <div className='flex flex-col w-full ' key={idx}>
//               {item.children?.length > 0 ? (
//                 <>
//                   <button
//                     className={`flex  rounded-md transition-transform hover:bg-[#7ad2cb3c] pl-4 pr-2 py-3  w-full justify-between items-center duration-300 ${
//                       openMenus[item.key] ? '' : ''
//                     }`}
//                     onClick={() => toggleMenu(item.key)} // Use item.name as the key
//                   >
//                     {item.key}
//                     <DownArrow
//                       className={`transition-transform duration-300 size-[22px] ${
//                         openMenus[item.key] ? 'rotate-180  ' : ''
//                       }`}
//                     />
//                   </button>
//                   <div
//                     className={`flex flex-col gap-3 transition-all duration-300 ease-in-out overflow-hidden ${
//                       openMenus[item.key] ? 'max-h-[500px] mt-3 ' : 'max-h-0'
//                     }`}
//                   >
//                     {item.children?.map((item) => (
//                       <NavLink
//                         key={item.key}
//                         to={item.path}
//                         className={({ isActive }) =>
//                           `ml-6 py-3 rounded-md text-stone-600 px-4 hover:bg-[#7ad2cb3c]  cursor-pointer duration-300 ${
//                             isActive
//                               ? 'bg-[#7ad2cb3c]  '
//                               : ' dark:text-stone-200'
//                           }`
//                         }
//                         onClick={() => setIsOpen(false)} // Close the sidebar when a link is clicked
//                       >
//                         <span>{item.key}</span>
//                       </NavLink>
//                     ))}
//                   </div>
//                 </>
//               ) : (
//                 <NavLink
//                   to={item.path}
//                   className={({ isActive }) =>
//                     `py-3 w-full  rounded-md  px-4 hover:bg-[#7ad2cb3c]  cursor-pointer duration-150 ${
//                       isActive
//                         ? 'bg-[#7ad2cb3c]  '
//                         : 'text-stone-900 dark:text-stone-200'
//                     }`
//                   }
//                   onClick={() => setIsOpen(false)} // Close the sidebar when a link is clicked
//                 >
//                   <span>{item.key}</span>
//                 </NavLink>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {isOpen && (
//         <div
//           className='fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden'
//           onClick={toggleSidebar}
//         ></div>
//       )}
//     </div>
//   );
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppSelector } from '@/redux/hooks';
import { MenuIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '@/assets/images/logo.png';
import { sidebarItemsGenerator } from '@/utils/sidebarItemsGenerator';
import { userPaths } from '@/routes/user.routes';
import { DownArrow } from './Icons';
import { adminPaths } from '@/routes/admin.routes';

export default function Sidebar() {
  const { user } = useAppSelector((state) => state.auth);
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  let sidebarItems;

  switch (user?.role) {
    case 'admin':
      sidebarItems = sidebarItemsGenerator(adminPaths);
      break;
    case 'user':
      sidebarItems = sidebarItemsGenerator(userPaths);
      break;

    default:
      break;
  }

  const [isOpen, setIsOpen] = React.useState(false);

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = (key: string) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
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
        className={`fixed overflow-y-auto top-0 left-0 h-screen 900:w-56 lg:w-64  dark:bg-secondary-color bg-primary-color py-9 px-4  z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } 900:translate-x-0 900:w-56 lg:w-64 flex flex-col gap-4`}
      >
        <Link className='flex justify-center gap-2 items-center mb-4' to='/'>
          <img className='size-7' src={logo} alt='' />
          <h2 className='text-2xl font-bold  tracking-widest text-primary-color '>
            <span className=' text-[#dbecea]'>XRIDES</span>
          </h2>
        </Link>

        <div className='flex flex-col space-y-3 w-full text-[15px] text-[#d2eae7] '>
          {sidebarItems
            ?.filter((item) => (item.key && item.path) || item.children)
            .map((item, idx) => (
              <div className='flex flex-col w-full ' key={idx}>
                {item.children ? (
                  <>
                    <button
                      className={`flex hover:text-white rounded-md transition-transform hover:bg-[#207a72bb] pl-4 pr-2 py-3  w-full justify-between items-center duration-300 ${
                        openMenus[item.key!] ? 'text-white' : ''
                      }`}
                      onClick={() => toggleMenu(item.key!)} // Use item.name as the key
                    >
                      <div className='flex gap-3 items-center'>
                        {item.icon && <item.icon className='size-6' />}
                        {item.key}
                      </div>
                      <DownArrow
                        className={`transition-transform duration-300 size-5 ${
                          openMenus[item.key!] ? 'rotate-180  ' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`flex flex-col gap-3 transition-all duration-300 ease-in-out overflow-hidden ${
                        openMenus[item.key!] ? 'max-h-[500px] mt-3 ' : 'max-h-0'
                      }`}
                    >
                      {item.children?.map((item) => (
                        <NavLink
                          key={item.key}
                          to={item.path!}
                          className={({ isActive }) =>
                            `ml-6 py-3 rounded-md  px-4 hover:bg-[#207a72bb] hover:text-white cursor-pointer duration-150 ${
                              isActive
                                ? 'bg-[#207a72bb] text-white '
                                : ' dark:text-stone-200'
                            }`
                          }
                          onClick={() => setIsOpen(false)} // Close the sidebar when a link is clicked
                        >
                          <span>{item.key}</span>
                        </NavLink>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <NavLink
                      to={item.path!}
                      className={({ isActive }) =>
                        `py-3 w-full flex gap-2 items-center rounded-md  px-4 hover:text-white hover:bg-[#207a72bb]  cursor-pointer duration-150 ${
                          isActive ? 'bg-[#207a72bb]  text-white' : ''
                        }`
                      }
                      onClick={() => setIsOpen(false)} // Close the sidebar when a link is clicked
                    >
                      {item.icon && <item.icon className='size-6' />}
                      <span>{item.key}</span>
                    </NavLink>
                  </>
                )}
              </div>
            ))}
        </div>
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

// 7ad2cb3c

// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useAppSelector } from '@/redux/hooks';
// import { ArrowDownIcon, MenuIcon } from 'lucide-react';
// import React, { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import logo from '@/assets/images/logo.png';
// import { sidebarItemsGenerator } from '@/utils/sidebarItemsGenerator';
// import { userPaths } from '@/routes/user.routes';
// import { DownArrow } from './Icons';

// export default function Sidebar() {
//   const { user } = useAppSelector((state) => state.auth);
//   const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

//   let sidebarItems;

//   switch (user?.role) {
//     // case 'admin':
//     //   sidebarItems = sidebarItemsGenerator(adminPaths, 'admin');
//     //   break;
//     case 'user':
//       sidebarItems = sidebarItemsGenerator(userPaths, 'user');
//       break;

//     default:
//       break;
//   }

//   const [isOpen, setIsOpen] = React.useState(false);

//   // Toggle the sidebar visibility
//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleMenu = (key: string) => {
//     setOpenMenus((prevState) => ({
//       ...prevState,
//       [key]: !prevState[key],
//     }));
//   };

//   return (
//     <div className='relative'>
//       {/* Hamburger Icon - Visible only on small screens */}
//       <div className='900:hidden fixed w-12 pt-2.5 pl-2.5 bg-primary-color h-screen z-30'>
//         <MenuIcon
//           onClick={toggleSidebar}
//           className='text-3xl cursor-pointer text-green-50'
//         />
//       </div>

//       {/* Sidebar - Hidden on small screens, visible on larger screens */}
//       <div
//         className={`fixed top-0 left-0 h-screen 900:w-56 lg:w-64  dark:bg-secondary-color bg-primary-color py-9 px-4  z-40 transform transition-transform duration-300 ease-in-out ${
//           isOpen ? 'translate-x-0' : '-translate-x-full'
//         } 900:translate-x-0 900:w-56 lg:w-64 flex flex-col gap-4`}
//       >
//         <Link className='flex justify-start gap-1 items-center mb-4' to='/'>
//           <img className='size-7' src={logo} alt='' />
//           <h2 className='text-2xl font-bold tracking-wider text-primary-color '>
//             X
//             <span className=' text-secondary-color dark:text-white'>RIDES</span>
//           </h2>
//         </Link>

//         <div className='flex flex-col gap-3 w-full text-white'>
//           {sidebarItems?.map((item, idx) => (
//             <div className='flex flex-col gap-3 w-full ' key={idx}>
//               {item.children?.length > 0 ? (
//                 <div className=''>
//                   <button
//                     className='flex pl-4 py-2.5 mb-3 text-sm w-full justify-between items-center'
//                     onClick={() => toggleMenu(item.key)} // Use item.name as the key
//                   >
//                     {item.key}
//                     <DownArrow
//                       className={`transition-transform duration-300 size-5 ${
//                         openMenus[item.key] ? 'rotate-180' : ''
//                       }`}
//                     />
//                   </button>
//                   <div
//                     className={`flex flex-col gap-3 transition-all duration-500 ease-in-out overflow-hidden ${
//                       openMenus[item.key] ? 'max-h-[500px]' : 'max-h-0'
//                     }`}
//                   >
//                     {item.children?.map((item) => (
//                       <NavLink
//                         key={item.key}
//                         to={item.path}
//                         className={({ isActive }) =>
//                           `ml-6 py-2.5 rounded-md text-sm px-4 hover:bg-[#0c383351] hover:text-white cursor-pointer duration-300 ${
//                             isActive
//                               ? 'bg-[#0c383351] text-white py-2.5'
//                               : 'text-[#c8f2ed] dark:text-stone-200'
//                           }`
//                         }
//                         onClick={() => setIsOpen(false)} // Close the sidebar when a link is clicked
//                       >
//                         <span>{item.key}</span>
//                       </NavLink>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <NavLink
//                   to={item.path}
//                   className={({ isActive }) =>
//                     `py-2.5 w-full text-white rounded-md text-sm px-4 hover:bg-[#0c383351]  cursor-pointer duration-150 ${
//                       isActive
//                         ? 'bg-[#0c383351]  py-2.5'
//                         : 'text-stone-900 dark:text-stone-200'
//                     }`
//                   }
//                   onClick={() => setIsOpen(false)} // Close the sidebar when a link is clicked
//                 >
//                   <span>{item.key}</span>
//                 </NavLink>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {isOpen && (
//         <div
//           className='fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden'
//           onClick={toggleSidebar}
//         ></div>
//       )}
//     </div>
//   );
// }
