import React from 'react';

//? types && interfaces //
import { LayoutProps } from '../types/interfaces';

//? components //

const PageLayout: React.FunctionComponent<LayoutProps> = (props: LayoutProps) => {
  return (
    <>
      <div>{props.TopNavBar}</div>

      <div>{props.SideNavBar}</div>

      
    </>
  );
};

export default PageLayout;
