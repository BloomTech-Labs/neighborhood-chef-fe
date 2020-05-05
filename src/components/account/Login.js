import React from "react";
import { buttonStyles } from "../../styles";
import { Link } from "react-router-dom";

const Login = () => {
  const classes = buttonStyles();
  return (
    <div className="login-container">
      <h1>Neighborhood Chef</h1>
      <p style={{ fontStyle: "italic" }}>Prepare to eat well</p>
      <div className={`${classes.root} ${classes.single}`}>
        Login Securely with Okta
      </div>
      <div style={{ marginTop: "10px" }}>
        Don't have an account? <Link to="/register">Register now.</Link>
      </div>
    </div>
  );
};

export default Login;
