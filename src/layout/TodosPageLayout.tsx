import React from 'react';
//? types && interfaces //
import { LayoutProps } from '../types/interfaces';

const TodosPageLayout: React.FunctionComponent<LayoutProps> = (props: LayoutProps) => {
  return (
    <>
      <div>{props.SideNavBar}</div>
      <div className='h-screen  w-full  bg-gray-100 dark:bg-gray-900 flex flex-col gap-20 '>
        <div className=''>{props.TopNavBar}</div>
        <div className=' px-9  md:px-2 sm:ml-64 justify-center flex-wrap-reverse  flex flex-col-reverse gap-5 md:flex-row-reverse md:items-center  '>
            <h1 className="font-roboto text-5xl font-bold mx-auto text-gray-600 dark:text-white ">TODOS</h1>
        </div>
        <div className='h-fit pb-5     bg-gray-100  dark:bg-gray-900 px-9 md:px-2 sm:ml-64   '>
          <div className='flex justify-center flex-row  flex-wrap  gap-4'>{props.TodosCard}</div>
        </div>
      </div>
    </>
  );
};

export default TodosPageLayout;
