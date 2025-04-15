import React from 'react'
import Button from './Button'
import Avatar from './Avatar'
const Card = ({title, image, alt, description, price, buttonName, buttonDisable, onclick}) => {

    // const {title, description, image} = props
  return (
    <div>
        <div className="card" style={{width: "20rem"}}>
           <Avatar image={image} alt={alt}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">Price: {price}</p>
                <Button name={buttonName} disabled={buttonDisable} onclick={onclick}/>
               
            </div>
        </div>
    </div>
  )
}

export default Card