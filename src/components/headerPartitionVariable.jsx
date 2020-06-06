import React, { useState, useEffect } from "react";

import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import MonthPicker from "./events/view-events/MonthPicker";
import CreateEventHeader from "./events/create-event/CreateEventHeader";

const styles = makeStyles({
  container: {
    width: "100%",
    height: "10vh",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-evenly",
    paddingTop: "10px",
  },
});

function VariableHeader(props) {
  const classes = styles();
  const location = useLocation();
  const [urlLocation, setUrlLocation] = useState(
    location.pathname.split("/")[1]
  );
  useEffect(() => {
    setUrlLocation(location.pathname.split("/")[1]);
  }, [location]);

  switch (urlLocation) {
    case "dashboard":
      return (
        <section className={classes["container"]}>
          <Typography variant="h3">My Neighborhood</Typography>
        </section>
      );
    case "create-event":
      return (
        <section className={classes["container"]}>
          <CreateEventHeader />
        </section>
      );
    case "view-events":
      return (
        <section className={classes["container"]}>
          <MonthPicker />
        </section>
      );
    case "events":
      return (
        <section className={classes["container"]}>
          <Typography>Variable</Typography>
        </section>
      );
    default:
      return <Typography>Oopsie daisy</Typography>;
  }
}

export default VariableHeader;
