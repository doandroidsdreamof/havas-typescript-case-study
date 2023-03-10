import React, { useState } from 'react';
//? redux-toolkit //
import { useAppDispatch } from '../../store/hooks';
import { navbarToggle } from '../../store/reducers/reducersIndex';

//? images //
import avatarPlaceHolder from '../../assets/images/avatar-placeholder.jpg';

//? react-router-dom //
import { Link } from 'react-router-dom';

//? icons //
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

const TopNavBar = () => {
  const [hamburgerToggle, setHamburgerToggle] = useState<boolean>(false);

  //* State'i update etmesi için store oradan ilgili reducer'a yollar //
  const dispatch = useAppDispatch();

  //* Direk olarak attribute kısmından yapmaktan daha okunaklı diye böyle kullanıldı //
  const handleClick = function () {
    dispatch(navbarToggle());
    setHamburgerToggle(!hamburgerToggle);
  };

  return (
    <nav className='fixed top-0 z-50 w-full shadow-sm bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
      <div className='px-3 py-3 lg:px-5 lg:pl-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start'>
            <button
              onClick={() => handleClick()}
              data-drawer-target='logo-sidebar'
              data-drawer-toggle='logo-sidebar'
              aria-controls='logo-sidebar'
              type='button'
              className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            >
              <span className='sr-only'>Open sidebar</span>
              {hamburgerToggle ? (
                <AiOutlineClose className='w-6 h-6' aria-hidden='true' />
              ) : (
                <RxHamburgerMenu className='w-6 h-6' aria-hidden='true' />
              )}
            </button>
            <Link to='/'>
              <div className='flex ml-2 md:mr-24'>
                <span className='flex items-center gap-2 self-center text-2xl font-roboto  font-bold whitespace-nowrap dark:text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                 Portal
                </span>
              </div>
            </Link>
          </div>
          <div className='flex items-center'>
            <div className='flex items-center ml-3'>
              <div>
                <button type='button' className='flex text-sm bg-gray-800 rounded-full cursor-default'>
                  <span className='sr-only'>Open user menu</span>
                  <img className='w-8 h-8 rounded-full' src={avatarPlaceHolder} alt='avatar placeholder' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
