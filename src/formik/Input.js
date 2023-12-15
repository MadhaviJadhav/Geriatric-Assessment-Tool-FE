import React from 'react'
import {ErrorMessage, Field} from 'formik'
import TextError from '@/formik/TextError'


const Input = (props) => {
    const {label, name, ...rest} = props
  return (
    <div>
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} {...rest}></Field>
        <br/>
        <br/>
        <ErrorMessage component={TextError} name={name}/>
    </div>
  )
}

export default Input