import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ListToDo from './ListToDo'

const Acceuil = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    localStorage.clear()
    navigate('/login')
  }
  return (
    <div className='container text-center mt-5'>
      <h3> welcome to my Todo List</h3>

      <ListToDo />
      <Link to='/addtodo' className="btn btn-primary me-3" title='ADD'><i className="bi bi-card-checklist"></i> Add New</Link>
      <Link to='/login' className="btn btn-primary me-3" title='Login'><i className="bi bi-person-up"></i> Sign In </Link>
      <Link to='/register' className="btn btn-primary me-3" title='Register'><i className="bi bi-person-add"></i> Access User Registration</Link>

      <button onClick={handleClick} className="btn btn-primary" id="logout">LogOUT</button>


    </div>
  )
}

export default Acceuil