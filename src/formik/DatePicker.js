
import DateView from 'react-datepicker'
import {Field, ErrorMessage} from 'formik'
import TextError from './TextError'
export default function DatePicker(props){
    const {label, name, ...rest} = props;
    return(
        <>
            <label>{label}</label>

            <Field name = {name}>
                {
                    ({field, form}) => {
                        const {setFieldValue} = form; 
                        const {value} = field;
                        return <DateView id={name} {...field} {...rest} 
                        selected={value}
                        onChange={val=>{setFieldValue(name,'val')}}/>
                    }
                }
            </Field>
            <br/>
            <ErrorMessage component={TextError} name={name}/>
        </>
    )
}