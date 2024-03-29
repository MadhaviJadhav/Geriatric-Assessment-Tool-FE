'use client'
import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
const Selection = (props) => {
    const { label, name, options, ...rest } = props
    return (
        <div className='mx-5'>
            <Field as='select' id={name} name={name} {...rest}>
                {options.map(option => {
                    return (
                        <option key={option.value} value={option.value}>{option.key}</option>
                    )
                })
                }
            </Field>

            <ErrorMessage component={TextError} name={name} />
        </div>
    )
}

export default Selection