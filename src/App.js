import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login';
import Acceuil from './components/Acceuil';
import Register from './components/Register';
import Nav from './components/Nav';
import AddToDo from './components/AddToDo';
import ListToDo from './components/ListToDo';
import EditToDo from './components/EditToDo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App vh-100' style={{ backgroundColor: '#e2d5de' }}>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Acceuil />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/addtodo' element={<AddToDo />} />
          <Route path='/todolist' element={<ListToDo />} />
          <Route path='/edittodo/:id' element={<EditToDo />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
