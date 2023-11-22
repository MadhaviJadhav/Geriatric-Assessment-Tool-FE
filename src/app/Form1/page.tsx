'use client'
import React from 'react'
import { useFormik } from 'formik'
import { signUpSchema } from '@/app/schemas';
// import Head from '@/components/Head';

const initialValues = {
  name: "",
  email: "",
  password: "",
};
function Form() {

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, actions) => {
      alert("Form Submited Successfully")
      console.log(values);
      actions.resetForm();

    },

  })
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name">Name</label><br></br>
          <input type="text" name="name" id="name" placeholder='Name' autoComplete='off' value={values.name} onChange={handleChange} onBlur={handleBlur} /><br />
          {(errors.name && touched.name) ? (<p>{errors.name}</p>) : null}
        </div>

        <div>
          <label htmlFor="Email">Email</label><br></br>
          <input type="text" name="email" id="Email" placeholder='Email' autoComplete='off' value={values.email} onChange={handleChange} onBlur={handleBlur} />
          <br />
          {(errors.email && touched.email) ? (<p>{errors.email}</p>) : null}
        </div>

        <div>
          <label htmlFor="Password">Password</label><br></br>
          <input type="password" name="password" id="Password" placeholder='Password' autoComplete='off' value={values.password} onChange={handleChange} onBlur={handleBlur} />
          <br />
          {(errors.password && touched.password) ? (<p>{errors.password}</p>) : null}
        </div>
        <button className='border-2 border-black bg-gray' type="submit">Submit</button>
      </form>


    </div>
  )
}

export default Form