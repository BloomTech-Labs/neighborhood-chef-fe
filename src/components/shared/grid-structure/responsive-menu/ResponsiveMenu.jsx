import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router-dom";

const ResponsiveMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { push } = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (url) => {
    setAnchorEl(null);
    push(url);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon style={{ fontSize: "3rem" }} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose("/dashboard")}>
          My Neighborhood
        </MenuItem>
        <MenuItem onClick={() => handleClose("/view-events")}>
          Calendar
        </MenuItem>
        <MenuItem onClick={() => handleClose("/create-event")}>
          Create Event
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ResponsiveMenu;
