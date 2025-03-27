import React from "react";
import '../App.css';
const Header = () => {


    let today = "Todays Date: ";
    let date = new Date().toLocaleDateString();
  return (
    <header>
      <h1>
         {today}{date} 
      </h1>
      <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/forgetpassword">Forget Password</a></li>
        <li><a href="/tunde">Checkout</a></li>
        <li><a href="/tiana">Tiana</a></li>
        </ul>
    </header>
  );
};

export default Header;
