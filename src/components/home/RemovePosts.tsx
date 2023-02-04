import React from 'react';

//? icons //
import { RiDeleteBin7Fill } from 'react-icons/ri';

//? flowbite //
import { Button } from 'flowbite-react';

//? redux-toolkit //
import { useAppDispatch } from '../../store/hooks';
import { requestRemove } from '../../store/reducers/reducersIndex';

const RemovePosts = () => {
  const dispatch = useAppDispatch();

  const handleRemovePosts = function () {
    dispatch(requestRemove());
  };

  return (
    <Button onClick={() => handleRemovePosts()} className='font-roboto' color='failure'>
      Delete Posts
      <RiDeleteBin7Fill className='ml-2' />
    </Button>
  );
};

export default RemovePosts;
