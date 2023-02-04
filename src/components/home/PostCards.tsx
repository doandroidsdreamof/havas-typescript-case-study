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
  const reduxSearchValue = useAppSelector((state) => state.searchInputValue.searchInputSlice);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (reduxImportState === true) {
      getPosts();
    } else {
      setPots([]);
    }
  }, [reduxImportState, reduxSearchValue]);

  /*
  title?: string;
  body?: string;

  */

  async function getPosts() {
    const postsData = getRequest(postsUrl);

    postsData
      .then((data) => {
        if(reduxSearchValue.length > 0){
          setPots(data.filter((items) => items.body?.includes(reduxSearchValue)));
        }else{
          setPots(data.slice(0, -1));
        }
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
              <div className=' max-w-sm max-h-60  '>
                <Card>
                  <h5 className=' line-clamp-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white'>
                    {items?.title}
                  </h5>

                  <p className='line-clamp-3 font-normal text-sm text-gray-700 dark:text-gray-400'>{items?.body}</p>
                </Card>
              </div>
            </>
          ))
        : null}
    </>
  );
};

export default PostCards;
