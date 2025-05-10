import React from 'react'

const Button = ({name, disabled, onclick}) => {



  return (
    <div>
        <button className='btn btn-primary px-5 fs-4 fow-bold' disabled={disabled}  onClick={onclick}>{name}</button>
      
    </div>
  )
}

export default Button
