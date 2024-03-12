import React from 'react'
import {ErrorMessage, Field} from 'formik'
import TextError from '@/formik/TextError'


const Input = (props) => {
    const {label, name, placeholder, ...rest} = props
  return (
    <div className='mx-5'>
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} placeholder={placeholder} {...rest}></Field>
        
        <ErrorMessage component={TextError} name={name}/>
    </div>
  )
}

export default Input