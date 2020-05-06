import React from "react";
import { Link } from 'react-router-dom';
import { buttonStyles } from "../../styles";
import ls from 'local-storage';
import { nanoid } from 'nanoid';

const qs = require('querystring');
const crypto = require('crypto-browserify');

const Login = () => {
  const classes = buttonStyles();

  const handleClick = e => {
    e.preventDefault();
    ls.set('code_verifier', nanoid(43) );

    const hash = crypto.createHash('sha256')
                        .update(ls.get("code_verifier"))
                        .digest('base64')
                        .replace(/\+/g, '-')
                        .replace(/\//g, '_')
                        .replace(/=/g, '');  
    const query = {
        client_id: "0oa9qxckmhGd2aLsZ4x6",
        response_type: "code",
        scope: "openid",
        redirect_uri: "http://localhost:3000/login-redirect-url",
        state: "state-bsaWCD8F0dkd85REyU87",
        code_challenge_method: "S256",
        code_challenge: hash

    }

    const redirectURL = `https://dev-599411.okta.com/oauth2/default/v1/authorize?${qs.stringify(query)}`;
    console.log(hash);
    window.location.replace(`${redirectURL}`);
}

  return (
    <div className="login-container">
      <h1>Neighborhood Chef</h1>
      <p style={{ fontStyle: "italic" }}>Prepare to eat well</p>

      {/*need to add proper okta url for login here */}
        {" "}
        <div className={`${classes.root} ${classes.single}`} onClick={handleClick}>
          {" "}
          Login Securely with Okta
        </div>
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
