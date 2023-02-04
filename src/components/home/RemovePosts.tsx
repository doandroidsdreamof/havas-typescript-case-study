import React from 'react';

//? icons //
import { RiDeleteBin7Fill } from 'react-icons/ri';

//? flowbite //
import { Button } from 'flowbite-react';

const RemovePosts = () => {
  return (
    <Button className='font-roboto' color='failure'>
      Delete Posts
      <RiDeleteBin7Fill className='ml-2'  />
    </Button>
  );
};

export default RemovePosts;
