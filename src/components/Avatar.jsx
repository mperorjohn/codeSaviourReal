import React from 'react'
import { Image } from 'react-bootstrap'



const Avatar = ({ image, alt}) => {


  return (
    <div>
        <Image
            src={image}
            alt={alt}
            roundedCircle
            style={{
            width: '100px',
            height: '100px',
            objectFit: 'cover', 
            border: '2px solid #000',
            }}
            className='d-block mx-auto'
        />

    </div>
  )
}

export default Avatar