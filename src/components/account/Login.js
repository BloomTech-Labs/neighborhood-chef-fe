import React from "react";
import { buttonStyles, cardStyles } from "../../styles";
import ls from "local-storage";
import { nanoid } from "nanoid";
import AuthHeader from "../other/AuthHeader.js";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import food from "../../assets/food.jpg";

const qs = require("querystring");
const crypto = require("crypto-browserify");

const Login = () => {
  const cardClass = cardStyles();
  const buttonClass = buttonStyles();

  const handleClick = (e) => {
    e.preventDefault();
    ls.set("code_verifier", nanoid(43));

    const hash = crypto
      .createHash("sha256")
      .update(ls.get("code_verifier"))
      .digest("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=/g, "");
    const query = {
      client_id: "0oa9qxckmhGd2aLsZ4x6",
      response_type: "code",
      scope: "openid",
      redirect_uri: `${process.env.REACT_APP_FRONT_END_BASE_URL}/login-redirect-url`,
      state: "state-bsaWCD8F0dkd85REyU87",
      code_challenge_method: "S256",
      code_challenge: hash,
    };

    const redirectURL = `https://dev-599411.okta.com/oauth2/default/v1/authorize?${qs.stringify(
      query
    )}`;
    console.log(hash);
    window.location.replace(`${redirectURL}`);
  };

  return (
    <>
      <AuthHeader />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "50vw",
            height: "70vh",
            padding: "20px 0px",
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          <Card className={`${cardClass.root} ${cardClass.landingPage}`}>
            <CardHeader
              title={
                <Typography variant="h6">Login to Neighborhood Chef</Typography>
              }
              subheader={
                <Typography variant="caption">
                  <span style={{ opacity: ".6" }}>
                    Choose to eat comfortably
                  </span>
                </Typography>
              }
            />
            <CardContent>
              <div
                className={`${buttonClass.root} ${buttonClass.single}`}
                onClick={handleClick}
              >
                Login Securely with Okta
              </div>
            </CardContent>
          </Card>
        </div>
        <div style={{ height: "90vh", width: "50vw" }}>
          <img src={food} alt="food community" height="100%" width="100%" />
        </div>
      </div>
    </>
  );
};

export default Login;
