import {
  makeStyles,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";

export const buttonStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    textTransform: "none",
    margin: "3px",
    marginBottom: "8px",
    border: 0,
    borderRadius: 6,
    padding: "8px 20px",
    cursor: "pointer",
  },
  notActive: {
    background: "white",
    color: "black",
    opacity: 0.5,
    "&:hover": {
      background: "rgba(88, 212, 115, 0.3)",
    },
  },
  warn: {
    background: "white",
    color: "black",
    opacity: 0.5,
    "&:hover": {
      background: "#fd7c7c",
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
    justifyContent: "center",
    margin: "0 auto",
    textAlign: "center",
    background: "#58D573",
    fontSize: "2rem",
    color: "white",
    "& a": {
      color: "white",
    },
    "&:hover": {
      background: "#58D573",
    },
  },
  rsvpRoot: {
    height: "30px",
    width: "100px",
    borderRadius: "5px",
    color: "white",
    fontWeight: "bolder",
    cursor: "pointer",
    border: "none",
    opacity: ".6",
    margin: "0px 3px",
  },
  rsvpActive: {
    border: "1px solid black",
    opacity: "1",
  },
  icon: {
    background: "#E8E8E8",
    width: "45px",
    height: "45px",
  },
  iconGreen: {
    background: "#58D573",
    width: "45px",
    height: "45px",
    "&:hover": {
      background: "#58D573",
    },
  },
});

export const formStyles = makeStyles({
  registerComponent: {
    "text-align": "center",
    "font-size": "20px",
    color: "#A2A2A2",
    "& .loginLink": {
      color: "#58d473",
      "text-decoration": "underline",
      "font-size": "20px",
    },
    "& .steps": {
      background: "inherit",
      width: "100%",
      "justify-content": "center",
      "& .MuiMobileStepper-dotActive": {
        "background-color": "#000000",
      },
    },
  },
  registerForm: {
    width: "60%",
    margin: "0 auto",
    display: "flex",
    "flex-wrap": "wrap",
    "& h1": {
      width: "100%",
      "font-size": "44px",
      "line-height": "66px",
      "letter-spacing": "0.02em",
      "font-weight": "normal",
      color: "#000000",
    },
    "& .email": {
      "margin-top": "40px",
      width: "100%",
      "text-align": "left",
    },
    "& .password": {
      "margin-top": "40px",
      width: "48%",
      "text-align": "left",
    },
    "& .confirmPassword": {
      "margin-top": "40px",
      width: "48%",
      "text-align": "left",
      "margin-left": "4%",
    },
    "& .firstName": {
      "margin-top": "40px",
      width: "48%",
      "text-align": "left",
    },
    "& .lastName": {
      "margin-top": "40px",
      width: "48%",
      "text-align": "left",
      "margin-left": "4%",
    },
    "& .location": {
      visibility: "hidden",
      "margin-top": "40px",
      width: "100%",
      "text-align": "left",
    },
    "& .geocoder": {
      width: "100%",
      "margin-top": "-35px",
      "& input": {
        width: "100%",
      },
      "& .react-geocoder-item": {
        cursor: "pointer",
      },
    },
    "& .terms": {
      "margin-top": "40px",
      width: "100%",
    },
    "& .gender": {
      "margin-top": "40px",
      width: "100%",
      "text-align": "left",
      "& h3": {
        margin: "0",
        "font-weight": "normal",
        "font-size": "20px",
      },
      "& span": {
        "font-size": "16px",
      },
    },
    "& .photo": {
      "margin-top": "40px",
      width: "100%",
    },
    "& input": {
      "font-size": "20px",
      "font-style": "normal",
      "font-weight": "500",
      "line-height": "30px",
      "letter-spacing": "0.02em",
    },
    "& label": {
      "font-size": "20px",
      color: "#A2A2A2",
    },
    "& button": {
      width: "100%",
      padding: "10px 30px",
      margin: "20px 0",
      "background-color": "#58d473",
      "border-color": "#58d473",
      "border-radius": "10px",
      "font-size": "24px",
      "&:hover": {
        "background-color": "#12a245",
      },
    },
    "& .Mui-disabled": {
      "background-color": "#58D473",
      opacity: "0.5",
      color: "#fff",
    },
    "& .MuiFormControl-root": {
      "margin-top": "40px",
    },
    "& .Mui-error": {
      "font-size": "16px",
    },
  },
  icon: {
    cursor: "pointer",
  },
});

export const cardStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    minWidth: 200,
    margin: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    padding: "10px",
  },
  fullEvent: {
    height: "calc(100% - 36px)",
  },
  participants: {
    height: 150,
    width: "100%",
  },
  particExpand: {
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
  },
  landingPage: {
    width: "70%",
    maxWidth: 450,
    justifyContent: "space-between",
    height: "auto",
    maxHeight: "100%",
    overflow: "auto",
  },
  media: {
    height: 0,
    paddingTop: "40%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#e8e8e8",
    color: "black",
    letterSpacing: "3px",
  },
  share: { maxHeight: 150, width: "100%" },
  shareButtons: {
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 180,
    cursor: "pointer",
    color: (props) => {
      if (props.name === "Facebook") {
        return "#3965FF";
      }
      if (props.name === "Twitter") {
        return "#55ACEE";
      }
      if (props.name === "Text") {
        return "#2ddd53";
      }
      if (props.name === "Email") {
        return "#5192f3";
      }
    },
    background: (props) => {
      if (props.name === "Facebook") {
        return "#E5F0FF";
      }
      if (props.name === "Twitter") {
        return "#D9EFFF";
      }
      if (props.name === "Text") {
        return "#ebfff5";
      }
      if (props.name === "Email") {
        return "#e0e6ff";
      }
    },
    "&:hover": {
      background: "#f8f8f8",
    },
  },
  comments: {
    height: "calc(100%-20px)",
    maxWidth: "100%",
    maxHeight: "calc(100%-20px)",
  },
}));

export const textBoxStyles = makeStyles({
  background: {
    border: "0",
    borderRadius: "5px",
    background: "rgba(0,0,0,.1)",
    width: "180px",
    padding: "0px 5px",
    display: "flex",
    alignItems: "center",
  },
  button: {
    background: "0",
    cursor: "pointer",
    border: "0",
    width: "10%",
    padding: "0 5px",
  },
  textBox: {
    border: "0",
    borderRadius: "10px",
    background: "0",
    width: "85%",
    height: "100%",
    fontSize: "1.5rem",
  },
  addressInput: {
    position: "relative",
    marginTop: "35px",
    fontSize: "1.7rem",
    display: "block",
    border: 0,
    borderBottom: "1px solid rgba(0,0,0,.5)",
    width: "99%",
    background: 0,
    transition: "all .2s ease",
    "&:focus": {
      outline: "none",
      borderBottom: "2px solid #4051b5",
      "&:hover": {
        borderBottom: "2px solid #4051b5",
      },
    },
    "&:hover": {
      borderBottom: "2px solid rgba(0,0,0,.8)",
    },
    zIndex: 2,
  },
  addressLabel: {
    letterSpacing: ".5px",
    transition: "all .2s ease",
    position: "relative",
    top: ({ isFocus, addressValue }) =>
      isFocus || addressValue ? "57px" : "67px",
    color: ({ isFocus }) => (isFocus ? "#4051b5" : "rgba(0,0,0,.5)"),
  },
  icon: {
    position: "relative",
    top: "60px",
    left: ({ isFocus, addressValue }) =>
      isFocus || addressValue ? "71%" : "67%",
    zIndex: 3,
  },
});

export const modalStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

/*----Theme styling for entire app-----*/

export const theme = responsiveFontSizes(
  createMuiTheme({
    overrides: {
      MuiButton: {
        root: {
          "&$disabled": {
            opacity: ".4",
            background: "rgba(88, 212, 115, 0.6)",
          },
        },
      },
    },
    typography: {
      h1: {
        fontSize: "5rem",
      },
      h2: {
        fontSize: "4.5rem",
      },
      h3: {
        fontSize: "3.5rem",
      },
      h4: {
        fontSize: "3rem",
      },
      h5: {
        fontSize: "2.4rem",
      },
      h6: {
        fontSize: "1.8rem",
      },
      caption: {
        fontSize: "1.5rem",
      },
      body1: {
        fontSize: "1.7rem",
      },
      body2: {
        fontSize: "1.2rem",
      },
    },
    palette: {
      textSecondary: { color: "rgba(0, 0, 0, 0.6)" },
    },
  })
);
