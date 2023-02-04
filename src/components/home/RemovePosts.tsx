import React, { useState } from 'react';

//? icons //
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

//? flowbite //
import { Button, Modal } from 'flowbite-react';

//? redux-toolkit //
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { requestRemove } from '../../store/reducers/reducersIndex';

const RemovePosts = () => {
  const dispatch = useAppDispatch();
  const reduxImportState = useAppSelector((state) => state.requestState.requestInitSlice.requestState);
  const [open, setOpen] = useState(false);

  const handleRemovePosts = function () {
    dispatch(requestRemove());
    setOpen(false);
  };

  return (
    <>
      <Button
        disabled={reduxImportState ? false : true}
        onClick={() => setOpen(true)}
        className='font-roboto'
        color='failure'
      >
        Delete Posts
        <RiDeleteBin7Fill className='ml-2' />
      </Button>
      <Modal show={open} size='md' popup={true} onClose={() => setOpen(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle
              onClick={() => setOpen(false)}
              className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200'
            />
            <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete this product?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleRemovePosts}>
                Yes, I&apos;m sure
              </Button>
              <Button color='gray' onClick={() => setOpen(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RemovePosts;
