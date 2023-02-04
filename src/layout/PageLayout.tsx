import React from 'react';

//? types && interfaces //
import { LayoutProps } from '../types/interfaces';

// comments && posts

const PageLayout: React.FunctionComponent<LayoutProps> = (props: LayoutProps) => {
  return (
    <>
      <div>{props.SideNavBar}</div>
      <div className='h-screen  w-full  bg-gray-100 dark:bg-gray-900 flex flex-col gap-20 '>
        <div className=''>{props.TopNavBar}</div>
        <div className=' px-9  md:px-2 sm:ml-64 justify-center flex-wrap-reverse  flex flex-col-reverse gap-5 md:flex-row-reverse md:items-center justify-center '>
          <div className="flex gap-4 justify-center w-full md:w-fit md:justify-end ">
          <div>{props.ImportButton}</div>
          <div>{props.RemovePosts}</div>
          </div>
          <div className='w-full md:w-sixty '>{props.SearchInput}</div>
        </div>
        <div className='h-fit pb-5 flex justify-center flex-row  flex-wrap  gap-4    bg-gray-100  dark:bg-gray-900 px-9 md:px-2 sm:ml-64   '>
          {props.PostCards}
        </div>
      </div>
    </>
  );
};

export default PageLayout;
