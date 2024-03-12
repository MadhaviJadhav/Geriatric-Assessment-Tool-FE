import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import Input from './Input'
const RadioButton = (props) => {
  const { label, name, options, ...rest } = props
  return (
    <div>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {
          ({ field }) => {
            return options.map(option => {
              return (
                <>
                  <React.Fragment key={option.key}>
                    <div className='mb-[49px] flex gap-1 mx-5'>
                      <input type='radio' id={option.value} {...field}
                        value={option.value}
                        checked={field.value === option.value}
                        onClick={() => rest.onClick && rest.onClick()} />
                      <label htmlFor={option.value} className='mb-[49px] capitalize'>{option.key}</label>
                    </div>

                  </React.Fragment>
                  <br/>
                </>
              )
            })
          }
        }
      </Field>
      {/* <Input/> */}
      <ErrorMessage className='mx-5' component={TextError} name={name} />
      
    </div>
  )
}

export default RadioButton