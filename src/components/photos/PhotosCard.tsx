import React, { useEffect, useState } from 'react';
//? helper functions //
import getRequest from '../../utils/getRequest';

//? api //
import { photosUrl } from '../../api/apiIndex';

//? types && interfaces //
import { PhotosRoot } from '../../types/interfaces';

//? flowbite //
import { Card } from 'flowbite-react';

//? react-lazy //
import LazyLoad from 'react-lazy-load';
const PhotosCard = () => {
  const [photos, setPhotos] = useState<PhotosRoot>([]);

  useEffect(() => {
    const postsData = getRequest(photosUrl);
    postsData
      .then((data) => {
        setPhotos(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /*
    albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;

  */

  return (
    <>
      {photos.length > 0
        ? photos &&
          photos.map((items, id) => (
            <>
              <div className=' max-w-sm max-h-60 '>
                <Card className=' '>
                  <h5 className=' line-clamp-1 w-60 text-sm font-bold tracking-tight text-gray-900 dark:text-white'>
                    {items?.title}
                  </h5>
                  <div>
                    <LazyLoad className='flex justify-center'>
                      <img className='h-52 ' src={items.url} alt={items.title} />
                    </LazyLoad>
                  </div>
                </Card>
              </div>
            </>
          ))
        : null}
    </>
  );
};

export default PhotosCard;
