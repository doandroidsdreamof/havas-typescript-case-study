import React from 'react';
//? components //
import TopNavBar from '../components/navigation/TopNavBar';
import SideNavBar from '../components/navigation/SideNavBar';
import UsersCard from '../components/users/UsersCard';

//? layouts //
import UserPageLayout from '../layout/UserPageLayout';

const UsersPage = () => {
  return (
    <>
      <UserPageLayout TopNavBar={<TopNavBar />} SideNavBar={<SideNavBar />} UsersCard={<UsersCard />} />
    </>
  );
};

export default UsersPage;
