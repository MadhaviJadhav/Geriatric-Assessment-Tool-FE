import React from 'react'
import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'

const CheckBox = (props) => {
  const {label, name, options, ...rest} = props
  
  return (
    <div>
        <label>{label}</label>
        <Field name={name} {...rest}>
            {
                ({field})=>{
                    return options.map(option =>{
                        return(
                            <>
                            <React.Fragment key={option.key} >
                                <div className='flex gap-2'>
                                <input type='checkbox' id={option.value}
                                {...field} value={option.value}
                                checked={Boolean(field.value.includes(option.value))} />
                                <label htmlFor={option.value} className='flex flex-col'><h1>{option.key}</h1></label>
                                </div>
                                <br/>
                                
                            </React.Fragment>
                            
                            </>
                            
                        )
                    })
                }
            }
        </Field>
        <ErrorMessage component={TextError} name={name}/>
    </div>
  )
}

export default CheckBox;