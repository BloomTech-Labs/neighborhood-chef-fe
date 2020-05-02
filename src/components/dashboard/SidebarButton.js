import React from "react";

import { Link } from "react-router-dom";

//icons imports
import { Icon } from "@iconify/react";

//material-ui styles imports
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    textTransform: "none",
    margin: "3px",
    border: 0,
    borderRadius: 6,
    padding: "5px 20px",
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
});

const SidebarButton = ({ active, link, icon, text }) => {
  const classes = useStyles();
  return (
    <Button
      className={`${classes.root} ${
        active ? classes.active : classes.notActive
      }`}
    >
      <span style={{ marginRight: "5px" }}>
        <Icon height="20" icon={icon} />
      </span>
      <Link to={`/${link}`}>{text}</Link>
    </Button>
  );
};

export default SidebarButton;
