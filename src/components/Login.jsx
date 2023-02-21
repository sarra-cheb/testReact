import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik';
import Acceuil from './Acceuil';
const Login = () => {
  const getemail = localStorage.getItem('profileemail');
  const getpassword = localStorage.getItem('profilepassword');
  const navigate = useNavigate()
  return (
    <div className='container mt-5'>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validate={values => {
          const errors = {};
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
          const response = await axios.get('http://localhost:3000/users')
          const found = response.data.find(element => element.email === values.email && element.password === values.password)
          if (found) {
            navigate('/todolist');
            localStorage.setItem('profileemail', found.email)
            localStorage.setItem('profilepasword', found.password)
          }
          else {
            alert('vérifier email et password')
          }
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
        }) => (getemail && getpassword ? <Acceuil /> :
          <Form className='w-50 mx-auto mt-5' onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" value={values.email} onBlur={handleBlur} onChange={handleChange} className="form-control" name="email" aria-describedby="emailHelp" placeholder='saisissez votre email' />
              <p className='text-danger'>{errors.email && touched.email && errors.email}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" value={values.password} onBlur={handleBlur} onChange={handleChange} className="form-control" name="password" placeholder='saisissez votre mot de passe' />
              <p className='text-danger'>{errors.password && touched.password && errors.password}</p>
            </div>
            <button type="submit" disabled={isSubmitting} className="btn btn-primary w-100">Login</button>
          </Form>
        )
        }
      </Formik>
    </div>
  )
}
export default Login