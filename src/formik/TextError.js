import React from 'react'
import '../../styles/global.css'
const TextError = (props) => {
  return (
    <div className='error'>
        {props.children}
    </div>
  )
}

export default TextError