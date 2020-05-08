import { makeStyles } from "@material-ui/core/styles";

export const buttonStyles = makeStyles({
  root: {
    textTransform: "none",
    margin: "3px",
    marginBottom: "8px",
    border: 0,
    borderRadius: 6,
    padding: "8px 20px",
  },
  notActive: {
    background: "white",
    color: "black",
    opacity: 0.5,
    "&:hover": {
      background: "rgba(88, 212, 115, 0.3);",
    },
  },
  active: {
    background: "#58D573",
    color: "white",
    "& a": {
      color: "white",
    },
    "&:hover": {
      background: "#58D573",
    },
  },
  single: {
    cursor: "pointer",
    textAlign: "center",
    width: "200px",
    margin: "auto",
    background: "#58D573",
    color: "white",
    "& a": {
      color: "white",
    },
  },
});

export const formStyles = makeStyles({
  registerComponent: {
    "text-align": "center",
  },
  registerForm: {
    width: "50%",
    margin: "0 auto",
    display: "flex",
    "flex-direction": "column",
    "& .MuiFormControl-root": {
      "margin-top": "40px",
    },
    "& input": {
      width: "100%",
    },
    "& button": {
      padding: "10px 30px",
      margin: "20px 0",
      "background-color": "#58d473",
      "border-color": "#58d473",
      "&:hover": {
        "background-color": "#12a245",
      },
    },
  },
});

export const cardStyles = makeStyles({
  root: {
    width: "300px",
    height: "200px",
    padding: "10px",
    margin: "10px",
    border: "1px solid rgba(0,0,0,.15)",
    borderRadius: "10px",
  },
});
