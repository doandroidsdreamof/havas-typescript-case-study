import React from 'react'

//? components //
import TopNavBar from '../components/navigation/TopNavBar';
import SideNavBar from '../components/navigation/SideNavBar';
import SearchInput from '../components/common/SearchInput'

//? layouts //
import PageLayout from '../layout/PageLayout';

const CommentsPage = () => {
  return (
    <PageLayout
    TopNavBar={<TopNavBar />}
    SideNavBar={<SideNavBar />}
    SearchInput={<SearchInput />}

     />
  )
}

export default CommentsPage