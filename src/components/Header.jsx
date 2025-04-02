import React from "react";
import '../App.css';
import { Link } from 'react-router';
const Header = () => {


    let today = "Todays Date: ";
    let date = new Date().toLocaleDateString();
  return (
    <header>
      <h1>
         {today}{date} 
      </h1>
      <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to ="/login">Login</Link></li>
          <li><Link to ="/register">Register</Link></li>
          <li><Link to ="/forgetpassword">Forget Password</Link> </li>
        <li><Link to="/tunde">Checkout</Link> </li>
        <li><Link to="/tiana">Tiana</Link> </li>
        </ul>
    </header>
  );
};

export default Header;
