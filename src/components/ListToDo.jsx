import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const ListToDo = () => {
  const [todo, setTodo] = useState([])

  const getTodo = async () => {
    const response = await axios.get('http://localhost:3000/listToDo')
    setTodo(response.data)
  }
  useEffect(() => {
    getTodo()
  }, [])
  const handledelete = async (id) => {
    await axios.delete(`http://localhost:3000/listToDo/${id}`)
    getTodo()
  }
  return (
    <div className='container mt-5'>
      <h1 className='text-left text-primary'><i className="bi bi-file-check"></i>My-Todo-s</h1>
      <h3>Awesome Todo List</h3>
      <table className="table table-primary table-striped ">
        <thead className='thead-dark'>
          <tr>
            <th scope="col" style={{ color: 'blue', width: '10%' }}>No:</th>
            <th scope="col" style={{ color: 'blue', width: '30%' }}>Nom:</th>
            <th scope="col" style={{ color: 'blue', width: '40%' }}>Description:</th>
            <th scope="col" style={{ color: 'blue', width: '20%' }}>Actions:</th>
          </tr>
        </thead>
        <tbody>
          {
            todo.map((element, index) => {
              return (
                <tr key={element.id}>
                  <td> {element.id}</td>
                  <td >{element.nom}</td>
                  <td >{element.description}</td>
                  <td className='d-flex' ><button type="button" onClick={() => handledelete(element.id)} className="btn btn-danger w-10 me-2" title='Remove'><i className="bi bi-trash3"></i></button>
                    <Link to={`/edittodo/${element.id}`} className="btn btn-success w-10" title='Edit'><i className="bi bi-pencil-square"></i></Link>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
export default ListToDo