import React from 'react'
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Register = () => {
  const navigate = useNavigate()
  return (
    < div className='container mt-5' >
      <Formik
        initialValues={{
          nom: '',
          prenom: '',
          email: '',
          password: ''
        }}
        validate={values => {
          const errors = {};
          if (!values.nom) {
            errors.nom = ' nom est obligatoire';
          }
          if (!values.prenom) {
            errors.prenom = ' prenom est obligatoire';
          }
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'email n est pas correcte';
          }
          if (!values.password) {
            errors.password = 'email est obligatoire';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {

          console.log(values);
          await axios.post('http://localhost:3000/users', values)
          navigate('/login')
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
          <div className='row d-flex justify-content-center'>
            <Form className='col-6' onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nom" className="form-label">Nom</label>
                <input type="text" className="form-control" name="nom" value={values.nom} onChange={handleChange} onBlur={handleBlur} placeholder='saisissez votre nom' />
                <p className='text-danger'>{errors.nom && touched.nom && errors.nom}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="prenom" className="form-label">Prenom</label>
                <input type="text" className="form-control" name="prenom" placeholder='saisissez votre prenom' value={values.prenom} onBlur={handleBlur} onChange={handleChange} />
                <p className='text-danger'>{errors.prenom && touched.prenom && errors.prenom}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder='saisissez votre email ' value={values.email} onBlur={handleBlur} onChange={handleChange} />
                <p className='text-danger'>{errors.email && touched.email && errors.email}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" placeholder='******' value={values.password} onBlur={handleBlur} onChange={handleChange} />
                <p className='text-danger'>{errors.password && touched.password && errors.password}</p>
              </div>
              <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>Register</button>
            </Form>
          </div>
        )
        }
      </Formik>
    </div >
  )
}
export default Register