import React from "react";

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
    </div>
  );
};

export default Login;
