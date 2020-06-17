import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Avatar from "@material-ui/core/Avatar";

import ls from "local-storage";
import qs from "querystring";

import { makeInitials } from "../../utilities/functions";
import { cardStyles } from "../../styles";

const drawerWidth = 300;

const styles = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      padding: "0 5%",
      background: "lightgrey",
      overflowY: "auto",
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    height: "100vh",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
    backgroundColor: "lightgray",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

const AccountDrawer = (props) => {
  const styleClasses = styles();
  const me = JSON.parse(sessionStorage.getItem("user"));
  const cardClasses = cardStyles();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
    <div className={classes.root}>
      <CssBaseline />
      <Avatar
        onClick={handleDrawerOpen}
        className={`${cardClasses.avatar} 
        ${clsx(open && classes.hide)}`}
        style={{
          border: "2px solid rgba(88, 212, 115, 0.3)",
          cursor: "pointer",
          alignSelf: "center",
        }}
        alt="Picture User Avatar"
        src={me.photo !== "null" ? me.photo : null}
      >
        {me.photo === "null" && <Typography>{makeInitials(me)}</Typography>}
      </Avatar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      ></main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon fontSize="large" />
            ) : (
              <ChevronRightIcon fontSize="large" />
            )}
          </IconButton>
        </div>
        <section className={styleClasses.container}>
          <div className={styleClasses["avatar-container"]}>
            <Avatar
              className={styleClasses.avatar}
              src={me.photo !== "null" ? me.photo : null}
              alt="Profile Avatar"
            >
              {me.photo === "null" && (
                <Typography>{makeInitials(me)}</Typography>
              )}
            </Avatar>
            <Typography>First Last</Typography>
            <Typography>Edit Profile</Typography>
            <Typography onClick={logout} style={{ cursor: "pointer" }}>
              Logout
            </Typography>
          </div>
          <div className={styleClasses["middle-content-container"]}>
            <Typography variant="h6">Description</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium debitis voluptatum nisi iste?
            </Typography>
            <Typography variant="h6">Dietary Restrictions</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium debitis voluptatum nisi iste?
            </Typography>
          </div>
          <div className={styleClasses["bottom-content-container"]}>
            <div className={styleClasses["bottom-header-container"]}>
              <Typography variant="h6">Posts and Events</Typography>
              <Typography variant="h6">See all</Typography>
            </div>
            <section>card</section>
            <section>card</section>
            <section>card</section>
          </div>
        </section>
      </Drawer>
    </div>
  );
};

export default AccountDrawer;
