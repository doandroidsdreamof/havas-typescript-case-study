import React from 'react';
//? types && interfaces //
import { LayoutProps } from '../types/interfaces';

//? components //
import PageTitle from '../components/common/PageTitle';

const CommentsPageLayout: React.FunctionComponent<LayoutProps> = (props: LayoutProps) => {
  return (
    <>
      <div>{props.SideNavBar}</div>
      <div className='h-screen  w-full  bg-gray-100 dark:bg-gray-900 flex flex-col gap-20 '>
        <div className=''>{props.TopNavBar}</div>
        <div className=' px-4  md:px-2 sm:ml-64 justify-center flex-wrap-reverse  flex flex-col-reverse gap-5 md:flex-row-reverse md:items-center  '>
          <PageTitle title={'Comments'} />
        </div>
        <div className='h-fit pb-5  flex justify-center flex-row  flex-wrap  gap-4   bg-gray-100  dark:bg-gray-900 md:px-2 sm:ml-64   '>
    {props.CommentsCard}
        </div>
      </div>
    </>
  );
};

export default CommentsPageLayout;
