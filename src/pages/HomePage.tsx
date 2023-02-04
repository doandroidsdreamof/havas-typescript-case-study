import React, { useEffect,useState } from 'react';

//? components //
import TopNavBar from '../components/navigation/TopNavBar';
import SideNavBar from '../components/navigation/SideNavBar';
import ImportButton from '../components/home/ImportButton';
import SearchInput from '../components/common/SearchInput';

//? layouts //
import PageLayout from '../layout/PageLayout';

//? helper functions //
import getRequest from '../utils/getRequest';

//? api //
import { postsUrl } from '../api/apiIndex';

//? types && interfaces //
import { Root } from '../types/interfaces';

const HomePage = () => {
  const [post,setPots] = useState<Root>()


  useEffect(() => {
    const postsData = getRequest(postsUrl);
    postsData
      .then((data) => {
        setPots(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);




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
