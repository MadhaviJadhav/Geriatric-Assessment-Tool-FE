'use client'
import {Field} from 'formik'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export function datePick({props})
{
    const {name,label, ...rest} = props;
    return(
        <>
          <label>{label}</label>
          <Field name = {name}>
            {
                ({field, form}) => {
                    const {setFieldValue} = form;
                    const {value} = field;
                    console.log(value)
                    return <DatePicker id={name} {...field} {...rest}
                    selected={value} onChange={val => setFieldValue(name,val)}/>
                }
            }
          </Field>
          
        </>
    )

}