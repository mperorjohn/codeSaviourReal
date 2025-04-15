import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Contact = ({name, email, phoneNumber, gitHub, linkedIn}) => {
  return (
    <div className='container d-flex justify-content-center' >
          <div className='row'>
              <div className=' bg-light p-5'>
                  <h2>Contact Me</h2>
                  <h3>{name}</h3>
                  <p>{email}</p>
                  <p>{phoneNumber}</p>
                  <Link to={gitHub}>Github</Link><br/>
                  <Link to={email}>Email</Link><br/>
                  <Link to={linkedIn}>LinkedIn</Link>
                </div>
          </div>
    </div>
  )
}

export default Contact;
