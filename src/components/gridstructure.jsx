import React, { useEffect, useState } from "react";
import Header from "./header";
import Sidebar from "./dashboard/Sidebar";
import Logo from "./logo";
import VariableMainContent from "./variableMainContent";
import ProfileDrawerContent from "./profileDrawerContent";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";

//kyles imports
import ls from "local-storage";
import jwt from "jwt-decode";
import { USER_BY_EMAIL } from "../graphql/users/user-queries";
import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { print } from "graphql";

const styles = makeStyles( theme => {
 return (  
 { 
    "grid-container": {
    display: "grid",
    "grid-template-columns": "2fr 8fr",
    "grid-template-rows": "1fr 9fr",
    gap: "1px 1px",
    "grid-template-areas": ' "Logo Header" "Sidebar Variable" ',
    height: "100vh",

    [theme.breakpoints.down("md")] : {
      "grid-template-columns": "1fr",
      "grid-template-rows": "1fr 1fr 8fr",
      "gap": "1px 1px",
      "grid-template-areas": '"Logo" "Header" "Variable"',
    }
    },
    "grid-container-shifted": {
      display: "grid",
      "grid-template-columns": "2fr 2fr 2fr 2fr",
      "grid-template-rows": "1fr 9fr",
      gap: "1px 1px",
    },
    Variable: {
      gridArea: "Variable",
    },
    "Variable-Shifted": {
      "grid-area": "2 / 2 / 3 / 4",
    },
    Header: {
      gridArea: "Header",
      height: "10vh",
    },
    "Header-Shifted": {
      "grid-area": "1 / 2 / 2 / 4",
    },
    Sidebar: {
      gridArea: "Sidebar",
      paddingLeft: "5%",

      [theme.breakpoints.down("md")]: {
        display: "none",
        visibility: "none"
      }
    },
    "Sidebar-Shifted": {
      "grid-area": "2 / 1 / 3 / 2",
    },
    Logo: {
      gridArea: "Logo",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",

      "& *": {
        width: "100%",

        "&:first-child": {
          width: "20%",
        },

        "&:last-child": {
          width: "115%",
        },
      },
    },
    "Logo-Shifted": {
      "grid-area": "1 / 1 / 2 / 2",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",

      "& *": {
        width: "100%",

        "&:first-child": {
          width: "20%",
        },

        "&:last-child": {
          width: "115%",
        },
      },
    },
    "Drawer-Container": {
      "grid-area": "1 / 4 / 3 / 5",
      width: "25vw",
    },
    Drawer: {
      width: "25vw",
    },
  })
});

function GridStructure(props) {
  const classes = styles();

  const location = useLocation();
  const [urlLocation, setUrlLocation] = useState(
    location.pathname.split("/")[1]
  );
  useEffect(() => {
    setUrlLocation(location.pathname.split("/")[1]);
  }, [location]);

  useEffect(() => {
    if (ls.get("access_token")) {
      const token = ls.get("access_token");
      const decodedToken = jwt(token).sub;
      axiosWithAuth()({
        url: `${process.env.REACT_APP_BASE_URL}/graphql`,
        method: "post",
        data: {
          query: print(USER_BY_EMAIL),
          variables: { input: { email: decodedToken } },
        },
      })
        .then((res) => {
          sessionStorage.setItem(
            "user",
            JSON.stringify(res.data.data.getUserByEmail)
          );
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <div
      className={clsx({
        [classes["grid-container"]]: !open,
        [classes["grid-container-shifted"]]: open,
      })}
    >
      <div
        className={clsx({
          [classes["Logo"]]: !open,
          [classes["Logo-Shifted"]]: open,
        })}
      >
        <Logo />
      </div>
      <div
        className={clsx({
          [classes["Header"]]: !open,
          [classes["Header-Shifted"]]: open,
        })}
      >
        <Header openDrawer={openDrawer} open={open} />
      </div>
      <div
        className={clsx({
          [classes["Sidebar"]]: !open,
          [classes["Sidebar-Shifted"]]: open,
        })}
      >
        <Sidebar active={urlLocation} />
      </div>
      <div
        className={clsx({
          [classes["Variable"]]: !open,
          [classes["Variable-Shifted"]]: open,
        })}
      >
        <VariableMainContent {...props} />
      </div>
      <div className={clsx({ [classes["Drawer-Container"]]: open })}>
        <Drawer
          variant="persistent"
          open={open}
          anchor="right"
          className={clsx({ [classes["Drawer"]]: open })}
          classes={{
            paper: classes.Drawer,
          }}
        >
          <ProfileDrawerContent closeDrawer={closeDrawer} />
        </Drawer>
      </div>
    </div>
  );
}

export default GridStructure;
