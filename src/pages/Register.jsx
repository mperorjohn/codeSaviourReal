import React from "react";
import { Link } from "react-router";
const Register = () => {
  return (
    <div>
      <h1>This is our register page</h1>

      <Link
        style={{
          textDecoration: "none",
          color: "black",
        }}
        to="/login"
      >
        Already have an account? Login here
      </Link>
    </div>
  );
};

export default Register;
