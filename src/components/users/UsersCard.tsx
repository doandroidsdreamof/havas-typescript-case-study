import React, { useEffect, useState } from 'react';
//? helper functions //
import getRequest from '../../utils/getRequest';

//? api //
import { usersUrl } from '../../api/apiIndex';

//? types && interfaces //
import { UsersRoot } from '../../types/interfaces';

//? flowbite //
import { Card } from 'flowbite-react';

const UsersCard = () => {
  const [users, setUsers] = useState<UsersRoot>([]);

  useEffect(() => {
    const postsData = getRequest(usersUrl);
    postsData
      .then((data) => {
        setUsers(data.slice(0,-2));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {users.length > 0
        ? users &&
          users.map((items, id) => (
            <>
              <div className='  max-h-60 '>
                <Card key={id} className=' l max-h-60'>
                  <h5 className=' line-clamp-1 w-60  font-roboto text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Name: {items?.name}
                  </h5>
                  <h3 className=' line-clamp-1 w-60 font-roboto  text-sm font-bold tracking-tight text-gray-700 dark:text-gray-100'>
                    username: {items?.username}
                  </h3>
                  <p className='line-clamp-1 font-roboto w-60 text-sm font-bold tracking-tight text-gray-600 dark:text-gray-200 '>
                    email: {items?.email}
                  </p>
                  <p className='line-clamp-1 font-roboto w-60 text-sm font-bold tracking-tight text-gray-600 dark:text-gray-200 '>
                    website: {items?.website}
                  </p>
                </Card>
              </div>
            </>
          ))
        : null}
    </>
  );
};

export default UsersCard;
