
import DateView from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
export default function DatePicker(props) {
    const { label, name, ...rest } = props;
    return (
        <>
            <label>{label}</label>

            <Field name={name}>
                {
                    (props)=>{
                        const {field, form} = props;
                        const {setFieldValue} = form;
                        const {value} = field;
    
                        return(
                          <div className='mt-4 px-4'>
                            <DateView className="bg-gray-6" selected={value} name={name} {...field}  onChange={(val)=>setFieldValue(name,val)}/>
                          </div>
                        )
                       }
                }
            </Field>
            <div className='mt-1'>
            <ErrorMessage component={TextError} name={name} />
            </div>
        </>
    )
}