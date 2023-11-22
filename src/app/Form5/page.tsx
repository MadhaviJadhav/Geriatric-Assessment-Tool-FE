'use client'

import { Form, Formik, Field, ErrorMessage } from 'formik'
import React from 'react'
import { signUpSchema } from '../schemas'

const initialValues = {
    name: "",
    email: "",
    password: "",
    gender:"",
}

const Form5 = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signUpSchema}
            onSubmit={(values) => {
                // console.log("HII")
                console.log(values);
            }}

        >
            {formik => {
                return (
                    <Form>
                        <div>
                            <label htmlFor='name'>Name</label><br />
                            <Field type='text' name='name' id='name' placeholder='Enter your Name' /><br />
                            <ErrorMessage name='name'></ErrorMessage>
                        </div>
                        <div>
                            <label htmlFor='email'>Email</label><br />
                            <Field type='email' name='email' id='email' placeholder='Enter your email' />
                            <ErrorMessage name='email'></ErrorMessage>
                        </div>
                        <div>
                            <label htmlFor='Password'>Password</label><br />
                            <Field type='password' name='password' id='password' /><br />
                            <ErrorMessage name='password'></ErrorMessage>
                        </div>

                        <div>
                            <button type="button" name='gender' onClick={()=>{
                                formik.setFieldValue('gender','Female')
                                // console.log(formik)
                            }}>Female</button>
                            <button type="button" name='gender' onClick={()=>{
                                formik.setFieldValue('gender','Male')}}>Male</button>
                        </div>
                        <button type='submit' >Submit</button>
                    </Form>
                )
            }
            }
        </Formik>
    )
}

export default Form5