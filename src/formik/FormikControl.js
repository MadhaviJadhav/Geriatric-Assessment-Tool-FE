import React from 'react'
import Input from './Input'
import RadioButton from './RadioButton'
import CheckBox from './CheckBox'
import Selection from './Select'
import DatePicker from './DatePicker'
import DateHandle from './DateHandle'
import datePick from './datePick'

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
        case 'date1':
            return <DateHandle {...rest}/>
        case 'date2':
            return <datePick {...rest}/>    
        default: return null    
    }

    
}

export default FormikControl