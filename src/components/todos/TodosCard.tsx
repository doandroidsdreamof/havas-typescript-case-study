import React, { useEffect, useState } from 'react';
//? helper functions //
import getRequest from '../../utils/getRequest';

//? api //
import { todosUrl } from '../../api/apiIndex';

//? types && interfaces //
import { TodosRoot } from '../../types/interfaces';

//? flowbite //
import { Card } from 'flowbite-react';

//? react-sortable //

const TodosCard = () => {
  const [todos, setTodos] = useState<TodosRoot>([]);

  useEffect(() => {
    const postsData = getRequest(todosUrl);
    postsData
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {todos.length > 0
        ? todos &&
          todos.map((items, id) => (
            <>
              <div className=' max-w-sm max-h-60  '>
                <Card>
                  <h5 className=' line-clamp-1 w-60 text-sm font-bold tracking-tight text-gray-900 dark:text-white'>
                    {items?.title}
                  </h5>
                </Card>
              </div>
            </>
          ))
        : null}
    </>
  );
};

export default TodosCard;
