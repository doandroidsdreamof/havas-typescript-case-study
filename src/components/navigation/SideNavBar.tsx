import React, { useState } from 'react';

//? redux-toolkit //
import { useAppSelector } from '../../store/hooks';

//? react-router-dom //
import { Link } from 'react-router-dom';

//? icons //
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { FiMoon, FiUsers, FiSun } from 'react-icons/fi';
import { AiOutlineComment } from 'react-icons/ai';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { GrHomeRounded } from 'react-icons/gr';

const SideNavBar = () => {
  const navbarState = useAppSelector((state) => state.navbar.navbarSlice.navbarState);
  const [darkModeToggle, setDarkModeToggle] = useState<boolean>(false);

  //* Sürekli yazmamak için tekrar eden stiller değişkene atıldı //
  const homeTodosStyle: string =
    'flex-shrink-0 w-6 h-6  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white';
  const comUsPhDmStyle: string =
    'flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white';
  const linkStyleAll: string =
    'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';
  const textStyleAll: string = 'flex-1 ml-3 whitespace-nowrap font-roboto';

  const darkModeHandle = function (): void {
    setDarkModeToggle(!darkModeToggle);
  };

  return (
    <aside
      id='logo-sidebar'
      className={
        navbarState
          ? 'fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700'
          : 'fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700'
      }
      aria-label='Sidebar'
    >
      <div className='h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800'>
        <ul className='space-y-2'>
          <li>
            <Link to='/' className={linkStyleAll}>
              <GrHomeRounded aria-hidden='true' className={homeTodosStyle}></GrHomeRounded>
              <span className='ml-3'>Home</span>
            </Link>
          </li>
          <li>
            <Link to='/todos' className={linkStyleAll}>
              <BsFillPatchCheckFill aria-hidden='true' className={homeTodosStyle}></BsFillPatchCheckFill>
              <span className={textStyleAll}>Todos</span>
            </Link>
          </li>
          <li>
            <Link to='/comments' className={linkStyleAll}>
              <AiOutlineComment aria-hidden='true' className={comUsPhDmStyle}></AiOutlineComment>
              <span className={textStyleAll}>Comments</span>
            </Link>
          </li>
          <li>
            <Link to='/users' className={linkStyleAll}>
              <FiUsers aria-hidden='true' className={comUsPhDmStyle}></FiUsers>
              <span className={textStyleAll}>Users</span>
            </Link>
          </li>
          <li>
            <Link to='/photos' className={linkStyleAll}>
              <HiOutlinePhotograph aria-hidden='true' className={comUsPhDmStyle}></HiOutlinePhotograph>
              <span className={textStyleAll}>Photos</span>
            </Link>
          </li>
          <li>
            <div
              onClick={() => darkModeHandle()}
              className='flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
            >
              {darkModeToggle ? (
                <FiSun aria-hidden='true' className={comUsPhDmStyle}></FiSun>
              ) : (
                <FiMoon aria-hidden='true' className={comUsPhDmStyle}></FiMoon>
              )}
              <span className={textStyleAll}>Dark Mode</span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideNavBar;