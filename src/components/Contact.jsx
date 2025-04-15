import React from 'react';
import { Link } from 'react-router-dom';
import {  Container } from 'react-bootstrap';
import Avatar from './Avatar';
// import { Alert } from 'bootstrap';
import Button from './Button';

const Contact = ({name, email, phoneNumber, gitHub, linkedIn, image, alt, buttonName}) => {
  return (
    <div className='container d-flex justify-content-center' >
          <div className='row'>
              <div className=' bg-light p-5'>
                 <Avatar image={image} alt={alt}/>
                  <h2>Contact Me</h2>
                  <h3>{name}</h3>
                  <p>{email}</p>
                  <p>{phoneNumber}</p>
                  <Link to={gitHub}>Github</Link><br/>
                  <Link to={email}>Email</Link><br/>
                  <Link to={linkedIn}>LinkedIn</Link>
                  <Button name={buttonName}/>
                </div>
          </div>
    </div>
  )
}

export default Contact;
