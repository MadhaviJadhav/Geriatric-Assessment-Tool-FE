import React from 'react'
import Input from './Input'
import RadioButton from './RadioButton'
import CheckBox from './CheckBox'
import Selection from './Selection'
import DatePicker from './DatePicker'

const FormikControl = (props) => {

    const { control, ...rest } = props

    switch (control) {
        case 'input':
            return <Input {...rest}/>
        case 'textarea':
        case 'select':
            return <Selection {...rest}/> 
        case 'radio':
             return <RadioButton {...rest}/>
        case 'checkbox':
            return <CheckBox {...rest}/>
        case 'date':
            return <DatePicker {...rest}/>
        default: return null    
    }

    
}

export default FormikControl