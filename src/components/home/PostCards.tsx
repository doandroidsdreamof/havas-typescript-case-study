import React, { useEffect, useState } from 'react';

//? flowbite //
import { Card } from 'flowbite-react';
//? helper functions //
import getRequest from '../../utils/getRequest';

//? api //
import { postsUrl } from '../../api/apiIndex';

//? types && interfaces //
import { Root } from '../../types/interfaces';

//? redux-toolkit //
import { useAppSelector, useAppDispatch } from '../../store/hooks';

const PostCards = () => {
  const [post, setPots] = useState<Root>([]);
  const reduxImportState = useAppSelector((state) => state.requestState.requestInitSlice.requestState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (reduxImportState === true) {
      getPosts();
    }else{
      setPots([])
    }
  }, [reduxImportState]);

  /*
  title?: string;
  body?: string;

  */

  async function getPosts() {
    const postsData = getRequest(postsUrl);
    postsData
      .then((data) => {
        setPots(data.slice(0, -1));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      {post.length > 0
        ? post &&
          post.map((items, id) => (
            <>
              <div key={id} className='max-w-sm max-h-60'>
                <Card>
                  <h5 className='text-lg font-bold tracking-tight text-gray-900 dark:text-white'>
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className='font-normal text-sm text-gray-700 dark:text-gray-400'>
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
                    order.
                  </p>
                </Card>
              </div>
            </>
          ))
        : null}
    </>
  );
};

export default PostCards;
