import React from 'react'
import '../../styles/global.css'
const TextError = ({children}) => {
  return (
    <div className='error'>
        {children}
    </div>
  )
}

export default TextError