import React from 'react'

//? components //
import TopNavBar from '../components/navigation/TopNavBar';
import SideNavBar from '../components/navigation/SideNavBar';

//? layouts //
import PageLayout from '../layout/PageLayout';


const PhotosPage = () => {
  return (
    <PageLayout
    TopNavBar={<TopNavBar />}
    SideNavBar={<SideNavBar />}

     />
  )
}

export default PhotosPage