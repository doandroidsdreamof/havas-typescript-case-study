import React from 'react';

//? flowbite //
import { Button } from 'flowbite-react';

//? icons //
import { AiOutlinePlus } from 'react-icons/ai';

//? redux-toolkit //
import { useAppDispatch } from '../../store/hooks';
import { requestInitToggle } from '../../store/reducers/reducersIndex';

const ImportButton = () => {
  const dispatch = useAppDispatch();

  const handleRequest = function () {
    dispatch(requestInitToggle());
  };

  return (
    <div>
      <Button className='font-roboto' onClick={() => handleRequest()}>
        Import Posts
        <AiOutlinePlus className='ml-2' />
      </Button>
    </div>
  );
};

export default ImportButton;
