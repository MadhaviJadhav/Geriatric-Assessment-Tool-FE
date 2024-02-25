import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
const RadioHor = (props) => {
  const { label, name, options, ...rest } = props
  return (
    <div>
      {/* <label>{label}</label> */}
      <Field name={name} {...rest}>
        {
          ({ field }) => {
            return options.map(option => {
              return (
                // <>
                <div >
                  <React.Fragment key={option.key} >
                    
                    <div className='mb-[49px] flex  gap-1'>
                      <input type='radio' id={option.value} {...field}
                        value={option.value}
                        checked={field.value === option.value} />
                      <label htmlFor={option.value} className='mb-[49px] capitalize'>{option.key}</label>
                    </div>
                    

                  </React.Fragment>
                  {/* <br /> */}
                  </div>
                  
                // </>
              )
            })
          }
        }
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default RadioHor