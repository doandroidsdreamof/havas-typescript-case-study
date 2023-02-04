import React from 'react';

//? icons //
import { RiDeleteBin7Fill } from 'react-icons/ri';

//? flowbite //
import { Button } from 'flowbite-react';

//? redux-toolkit //
import { useAppDispatch } from '../../store/hooks';
import { requestInitToggle } from '../../store/reducers/reducersIndex';



const RemovePosts = () => {
  return (
    <Button className='font-roboto' color='failure'>
      Delete Posts
      <RiDeleteBin7Fill className='ml-2'  />
    </Button>
  );
};

export default RemovePosts;
