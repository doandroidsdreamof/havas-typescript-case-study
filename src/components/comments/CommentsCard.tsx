import React, { useEffect, useState } from 'react';
//? helper functions //
import getRequest from '../../utils/getRequest';

//? api //
import { commentsUrl } from '../../api/apiIndex';

//? types && interfaces //
import { CommnetsRoot } from '../../types/interfaces';

//? flowbite //
import { Card } from 'flowbite-react';

const CommentsCard = () => {
  const [comments, setComments] = useState<CommnetsRoot>([]);

  //* Refactoring TODOS => pagination //

  useEffect(() => {
    const postsData = getRequest(commentsUrl);
    postsData
      .then((data) => {
        setComments(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {comments.length > 0
        ? comments &&
          comments.map((items, id) => (
            <>
              <div className=' max-w-md max-h-60 '>
                <Card key={id} className=' max-w-2xl max-h-60'>
                  <h5 className=' line-clamp-1 w-60  font-roboto text-base font-bold tracking-tight text-gray-900 dark:text-white'>
                    {items?.name}
                  </h5>
                  <h3 className=' line-clamp-1 w-60 font-roboto  text-sm font-bold tracking-tight text-gray-700 dark:text-gray-100'>
                    {items?.email}
                  </h3>
                  <p className='line-clamp-1 font-roboto w-60 text-sm font-bold tracking-tight text-gray-600 dark:text-gray-200 '>
                    {items?.body}
                  </p>
                </Card>
              </div>
            </>
          ))
        : null}
    </>
  );
};

export default CommentsCard;
