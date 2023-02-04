import React from 'react'

//? components //
import TopNavBar from '../components/navigation/TopNavBar';
import SideNavBar from '../components/navigation/SideNavBar';
import SearchInput from '../components/common/SearchInput'
import CommentsCard from '../components/comments/CommentsCard';

//? layouts //
import CommentsPageLayout from '../layout/CommentsPageLayout';

const CommentsPage = () => {
  return (
    <CommentsPageLayout
    TopNavBar={<TopNavBar />}
    SideNavBar={<SideNavBar />}
    SearchInput={<SearchInput />}
    CommentsCard={<CommentsCard />}


     />
  )
}

export default CommentsPage