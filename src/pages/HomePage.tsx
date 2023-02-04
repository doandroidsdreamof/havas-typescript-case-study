import React from 'react';

//? components //
import TopNavBar from '../components/navigation/TopNavBar';
import SideNavBar from '../components/navigation/SideNavBar';
import ImportButton from '../components/home/ImportButton';
import SearchInput from '../components/common/SearchInput'

//? layouts //
import PageLayout from '../layout/PageLayout';

const HomePage = () => {
  return (
    <>
      <PageLayout
      TopNavBar={<TopNavBar />}
      SideNavBar={<SideNavBar />}
      ImportButton={<ImportButton />}
      SearchInput={<SearchInput />}


       />
    </>
  );
};

export default HomePage;

