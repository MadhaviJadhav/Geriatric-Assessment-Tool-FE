import React from 'react'
import {Formik, Form} from '/formik'
import * as Yup from 'yup'




const formikContainer = () => {

  const initialValues = {}
  const validationSchema = Yup.object({})
  const onSubmit = (values)=>{

  }  
  return (
    
    <Formik
      initialValues = {initialValues}
      validationSchema = {validationSchema}
      onSubmit = {onSubmit}
    >
        <Form></Form>
    </Formik>
  )
}

export default formikContainer