import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'

const EditToDo = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [todo, setTodo] = useState({})
  useEffect(() => {
    const getdata = async () => {
      const found = await axios.get(`http://localhost:3000/listTODo/${params.id}`)
      setTodo(found.data)
    }
    getdata()
  }, [params.id])

  return (
    <div className='container mt-5'>
      <Formik
        initialValues={todo || {
          nom: '',
          description: ''
        }}
        validate={values => {
          const errors = {};
          if (!values.nom) {
            errors.nom = 'nom est obligatoire!';
          }
          if (!values.description) {
            errors.description = 'description est obligatoire!';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          await axios.put(`http://localhost:3000/listTODo/${params.id}`, values)
          navigate('/todolist')
        }}
        enableReinitialize
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div className='row d-flex justify-content-center'>
            <Form className='col-6' onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nom" className="form-label">Nom</label>
                <input type="text" className="form-control" name="nom" onChange={handleChange} onBlur={handleBlur} value={values.nom} />
                <p className='text-danger'>{errors.nom && touched.nom && errors.nom}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" name="description" onChange={handleChange} onBlur={handleBlur} value={values.description} />
                <p className='text-danger'>{errors.description && touched.description && errors.description}</p>
              </div>
              <button type="submit" disabled={isSubmitting} className="btn btn-primary">Edit ToDo</button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  )
}
export default EditToDo
