import React from "react";
import { Link } from "react-router";  // import the Link component

const Login = () => {
  return (
    <div>
      <input type="text" placeholder="Enter your username" />
      <br />
      <br />
      <input type="password" placeholder="Enter your password" />
      <br />
      <input type="file" accept=".php,.png" />
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px",
          margin: "10px",
          borderRadius: "10px",
        }}
      >
        Login
      </button>

      <Link to="/register">Don't have an account? Register here</Link>
    </div>
  );
};

export default Login;
