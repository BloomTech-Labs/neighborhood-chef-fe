import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";

import MonthPicker from "./events/view-events/MonthPicker";
import CreateEventHeader from "./events/create-event/CreateEventHeader";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Logo from "./logo";
import { Icon } from "@iconify/react";
import chefIcon from "@iconify/icons-whh/chef";

const styles = makeStyles({
  container: {
    width: "100%",
    height: "10vh",
    textAlign: "center",
    display: "flex",
    justifyContent: "flex-start",
    // paddingTop: "10px",
    paddingLeft: "20px",
    alignItems: "center",
  },
});

function VariableHeader(props) {
  const event = useSelector((state) => state.currentEvent);
  const classes = styles();
  const location = useLocation();
  const [urlLocation, setUrlLocation] = useState(
    location.pathname.split("/")[1]
  );
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    setUrlLocation(location.pathname.split("/")[1]);
  }, [location]);

  switch (urlLocation) {
    case "dashboard":
      return (
        <section className={classes["container"]}>
          {matches ? (
            <Logo />
          ) : (
            <Typography variant="h4">My Neighborhood</Typography>
          )}
        </section>
      );
    case "create-event":
      return (
        <section className={classes["container"]}>
          {matches ? <Logo /> : <CreateEventHeader />}
        </section>
      );
    case "view-events":
      return (
        <section className={classes["container"]}>
          {matches && (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                color: "#58D473",
                marginRight: "10px",
              }}
            >
              <Icon width="1.1em" icon={chefIcon} />
            </span>
          )}
          <MonthPicker />
        </section>
      );
    case "events":
      return (
        <section className={classes["container"]}>
          {matches ? (
            <Logo />
          ) : (
            <Typography variant="h4">Event Details</Typography>
          )}
        </section>
      );
    default:
      return <Typography>Oopsie daisy</Typography>;
  }
}

export default VariableHeader;
