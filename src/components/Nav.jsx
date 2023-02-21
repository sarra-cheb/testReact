import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-dark " >
      < div className="container" >
        <Link className="navbar-brand" to="#" style={{ color: 'blue' }}><i className="bi bi-list-task ">TOdo List</i></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='/' style={{ color: 'blue' }}>Acceuil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='/addtodo' style={{ color: 'blue' }}>Add ToDo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='/todolist' style={{ color: 'blue' }}>List ToDo</Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link className="btn btn-primary me-3" id="login" to='/login'>Login</Link>
            <Link className="btn btn-outline-primary me-3 " to='/register'>Register</Link>
          </div>
        </div>
      </div >
    </nav >
  )
}

export default Nav
