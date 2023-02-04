import React from 'react';

//? components //
import TopNavBar from '../components/navigation/TopNavBar';
import SideNavBar from '../components/navigation/SideNavBar';
import PhotosCard from '../components/photos/PhotosCard';


//? layouts //
import PhotoPageLayout from '../layout/PhotoPageLayout';

const PhotosPage = () => {
  return <PhotoPageLayout TopNavBar={<TopNavBar />} SideNavBar={<SideNavBar />} PhotosCard={<PhotosCard />} />;
};

export default PhotosPage;
