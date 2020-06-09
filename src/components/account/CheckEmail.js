import React from "react";
import { buttonStyles } from "../../styles";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

const CheckEmail = () => {
  const classes = buttonStyles();
  const history = useHistory();
  return (
    <>
      <Typography style={{ marginTop: "20px", textAlign: "center" }}>
        Register form success! For security, please check your email to finish
        registering your account with us.
      </Typography>
      <Button
        className={`${classes.root} ${classes.single}`}
        onClick={() => history.push("/login")}
        style={{ marginTop: "15px" }}
      >
        <Typography variant="h5">Return to login page</Typography>
      </Button>
    </>
  );
};

export default CheckEmail;
