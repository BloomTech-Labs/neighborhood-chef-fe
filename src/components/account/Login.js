import React from "react";
import { buttonStyles } from "../../styles";
import { Link } from "react-router-dom";

const Login = () => {
  const classes = buttonStyles();
  return (
    <div className="login-container">
      <h1>Neighborhood Chef</h1>
      <p style={{ fontStyle: "italic" }}>Prepare to eat well</p>

      {/*need to add proper okta url for login here */}
      <Link to="/test">
        {" "}
        <div className={`${classes.root} ${classes.single}`}>
          {" "}
          Login Securely with Okta
        </div>
      </Link>
      <div style={{ marginTop: "10px" }}>
        Don't have an account?{" "}
        <span className="green-link">
          <Link to="/register">Register now.</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
