import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "@iconify/react";
import bxBell from "@iconify/icons-bx/bx-bell";
import magnifyingGlass from "@iconify/icons-entypo/magnifying-glass";
import Typography from "@material-ui/core/Typography";

import AccountDrawer from "./account/AccountDrawer";

const styles = makeStyles((theme) => ({
  container: {
    width: "20vw",
    height: "10vh",
    display: "flex",
    justifyContent: "space-between",
  },
  icons: {
    alignSelf: "center",
    color: "gray",
    margin: "0 4%",
  },
}));

function PersistentHeader(props) {
  const classes = styles();

  return (
    <section className={classes.container}>
      <Typography variant="h5" className={classes.icons}>
        <Icon icon={bxBell} />
      </Typography>
      <Typography variant="h5" className={classes.icons}>
        <Icon icon={magnifyingGlass} />
      </Typography>

      <AccountDrawer {...props} />
    </section>
  );
}

export default PersistentHeader;
