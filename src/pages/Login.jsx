import React from "react";
import { Link } from "react-router";  // import the Link component
import { useState } from "react";

const Login = () => {


  // state management in react application 

  const [username, setUsername] = React.useState("");   // string state
  const [password, setPassword] = React.useState("");  // string state
  const [login, setLogin] = React.useState(false);     // boolean state
  const [showPassword, setShowPassword] = React.useState(false);  // boolean state
  const [message, setMessage] = React.useState(0);  // number state
  const [file, setFile] = React.useState(null);  // file state


  const handleUsernameChange = (e)=>{
    setUsername(e.target.value)

  }

  const handlePasswordChange = (e)=>{
    setPassword(e.target.value)

  }


  const handleLogin = ()=>{
      setLogin(true)

      // redirect to another page
      setTimeout(()=>{
        window.location.href = "/tiana"
      }
      , 3000)
  }

  const handleShowPassword = ()=>{
    setShowPassword(!showPassword)
  }


  const handleMessage = (e)=>{
    setMessage(e.target.value.length)
  }

  const handleFile = (e)=>{
    setFile(e.target.files[0])
  }






  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
     
      
        <textarea
          style={{
            padding: "10px",
            margin: "10px 0",
            width: "300px",
            borderRadius: "5px",
            border: message === 100 ? "1px solid red" : "1px solid #ccc",
          }}

          maxLength={100}
          onChange={handleMessage}
        > 
          Enter your message here
        </textarea>
        <div>
          { message } / 100
        </div>
        <input
          type="text"
          placeholder="Enter your username"
          style={{
            padding: "10px",
            margin: "10px 0",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}

        // value={username}
        onChange={handleUsernameChange}
      />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        style={{
          padding: "10px",
          margin: "10px 0",
          width: "300px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}

        onChange={handlePasswordChange}
      />
      <button onClick={handleShowPassword}>{showPassword ? "Hide" : "show"}</button>

      <input
        type="file"
        accept=".php,.png"
        style={{
          margin: "10px 0",
        }}

        onChange={handleFile}
      />
      <button
        style={{
          backgroundColor: username === "" || password === "" || file === null ? "grey" : "blue",
          color: "white",
          padding: "10px 20px",
          margin: "10px 0",
          borderRadius: "5px",
          border: "none",
          cursor: username === "" || password === "" || file === null ? "not-allowed" : "pointer",
        }}
        disabled={username === "" || password === "" || file === null ? true : false}

        onClick={handleLogin}
      >
        Login
      </button>
      <Link
        style={{
          color: "blue",
          textDecoration: "none",
          marginTop: "10px",
        }}
        to="/register"
      >
        Don't have an account? Register here
      </Link>
    </div>
  );
};
export default Login;






// firstName 
// lastName
// email
// password
// confirmPassword // check if it matches the password
// phone
// dob
// profilePicture // display the profile picture in the avata tag