import React from 'react'

//? components //
import TopNavBar from '../components/navigation/TopNavBar';
import SideNavBar from '../components/navigation/SideNavBar';
import SearchInput from '../components/common/SearchInput'

//? layouts //
import CommentsPageLayout from '../layout/CommentsPageLayout';

const CommentsPage = () => {
  return (
    <CommentsPageLayout
    TopNavBar={<TopNavBar />}
    SideNavBar={<SideNavBar />}
    SearchInput={<SearchInput />}

     />
  )
}

export default CommentsPage