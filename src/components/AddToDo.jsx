import React from 'react'
import axios from 'axios'
import { Formik, Form } from 'formik'
import { useNavigate } from 'react-router-dom'
const AddToDo = () => {
  const navigate = useNavigate()
  return (
    <div className='container mt-5'>
      <Formik
        initialValues={{
          nom: '',
          description: ''
        }}
        validate={values => {
          const errors = {};
          if (!values.nom) {
            errors.nom = 'nom est obligatoire!';
          }
          if (!values.description) {
            errors.description = 'description est obligatoire !';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values);
          await axios.post('http://localhost:3000/listTODo', values)
          navigate('/todolist')
        }}
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
          <div className='row d-flex justify-content-center mb-4'>
            <Form onSubmit={handleSubmit}>
              <div className="form-outline flex-fill">
                <label htmlFor="nom" className="form-label">Nom</label>
                <input type="text" className="form-control form-control-lg" name="nom" value={values.nom} onBlur={handleBlur} onChange={handleChange} placeholder='Name' />
                <p className='text-danger'>{errors.nom && touched.nom && errors.nom}</p>
              </div>
              <div className="form-outline flex-fill me-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control form-control-lg" name="description" value={values.description} onBlur={handleBlur} onChange={handleChange} placeholder="What do you need to do today?" />
                <p className='text-danger'>{errors.description && touched.description && errors.description}</p>
              </div>
              <button type="submit" disabled={isSubmitting} className="btn btn-primary w-100">Add New</button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  )
}
export default AddToDo