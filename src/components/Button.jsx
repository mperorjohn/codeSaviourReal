import React from 'react'

const Button = ({name, disabled,}) => {



  return (
    <div>
        <button className='btn btn-primary px-5 fs-4 fow-bold' disabled={disabled}>{name}</button>
      
    </div>
  )
}

export default Button
