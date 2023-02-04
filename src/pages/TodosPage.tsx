import React from 'react'

//? components //
import TopNavBar from '../components/navigation/TopNavBar';
import SideNavBar from '../components/navigation/SideNavBar';
import TodosCard from '../components/todos/TodosCard';

//? layouts //
import TodosPageLayout from '../layout/TodosPageLayout';

const TodosPage = () => {
  return (
    <TodosPageLayout
    TopNavBar={<TopNavBar />}
    SideNavBar={<SideNavBar />}
    TodosCard={<TodosCard />}

     />
  )
}

export default TodosPage