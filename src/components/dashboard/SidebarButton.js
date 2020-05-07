import React from "react";

import { Link } from "react-router-dom";

//icons imports
import { Icon } from "@iconify/react";

//material-ui styles imports
import Button from "@material-ui/core/Button";
import { buttonStyles } from "../../styles";

const SidebarButton = ({ active, link, icon, text }) => {
  const classes = buttonStyles();
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
