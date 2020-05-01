import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  registerForm: {
    width: "50%",
    margin: "0 auto",
    display: "flex",
    "flex-direction": "column",
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
