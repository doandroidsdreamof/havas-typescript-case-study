//? pages //
import { HomePage, CommentsPage, PhotosPage, TodosPage, UsersPage } from './pages/index';

//? react-router-dom //
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/comments' element={<CommentsPage />} />
      <Route path='/photos' element={<PhotosPage />} />
      <Route path='/todos' element={<TodosPage />} />
      <Route path='/users' element={<UsersPage />} />
    </Routes>
  );
}

export default App;
