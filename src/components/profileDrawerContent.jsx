import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import ls from "local-storage";
import qs from "querystring";
import { makeInitials } from "../utilities/functions";

const styles = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      paddingTop: "3.5vh",
      padding: "0 5%",
      background: "lightgrey",
      height: "100vh",
      overflowY: "scroll",
    },
    "top-content-container": {
      display: "flex",
      alignItems: "center",

      "& *:first-child": {
        flexBasis: "85%",
      },

      "& *:last-child": {
        flexBasis: "15%",
      },
    },
    "avatar-container": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "2%",
    },
    avatar: {
      width: theme.spacing(13),
      height: theme.spacing(13),
      fontSize: "200%",
      marginBottom: "3%",
    },
    "middle-content-container": {
      marginTop: "2%",

      "& h6": {
        fontWeight: "bold",
      },

      "& p": {
        marginTop: "2%",
        marginBottom: "5%",
      },
    },
    "bottom-content-container": {
      "& section": {
        minHeight: "20vh",
        background: "white",
        margin: "4% 0",
        borderRadius: "10px",
      },
    },
    "bottom-header-container": {
      display: "flex",
      marginBottom: "5%",

      "& h6:first-child": {
        flexBasis: "75%",
      },

      "& h6:last-child": {
        flexBasis: "25%",
      },
    },
  };
});

function ProfileDrawerContent(props) {
  const me = JSON.parse(sessionStorage.getItem("user"));
  const classes = styles();

  const logout = async (e) => {
    e.preventDefault();

    try {
      const idToken = ls.get("id_token");
      const url = `https://dev-599411.okta.com/oauth2/default/v1/logout`;

      const body = {
        id_token_hint: idToken,
        post_logout_redirect_uri: process.env.REACT_APP_FRONT_END_BASE_URL,
      };

      localStorage.clear();
      sessionStorage.clear();

      window.location.replace(`${url}?${qs.stringify(body)}`);
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <section className={classes.container}>
      <div className={classes["top-content-container"]}>
        <Typography onClick={logout} style={{ cursor: "pointer" }}>
          Logout
        </Typography>
        <Typography
          variant="h5"
          onClick={props.closeDrawer}
          style={{ cursor: "pointer" }}
        >
          {">"}
        </Typography>
      </div>
      <div className={classes["avatar-container"]}>
        <Avatar
          className={classes.avatar}
          src={me.photo !== "null" ? me.photo : null}
          alt="Profile Avatar"
        >
          {me.photo === "null" && <Typography>{makeInitials(me)}</Typography>}
        </Avatar>
        <Typography>First Last</Typography>
        <Typography>Edit Profile</Typography>
      </div>
      <div className={classes["middle-content-container"]}>
        <Typography variant="h6">Description</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          debitis voluptatum nisi iste?
        </Typography>
        <Typography variant="h6">Dietary Restrictions</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          debitis voluptatum nisi iste?
        </Typography>
      </div>
      <div className={classes["bottom-content-container"]}>
        <div className={classes["bottom-header-container"]}>
          <Typography variant="h6">Posts and Events</Typography>
          <Typography variant="h6">See all</Typography>
        </div>
        <section>card</section>
        <section>card</section>
        <section>card</section>
      </div>
    </section>
  );
}

export default ProfileDrawerContent;
