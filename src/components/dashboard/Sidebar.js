import React from "react";
import { Link } from "react-router-dom";

//icons imports
import { Icon } from "@iconify/react";
import houseDoor from "@iconify/icons-bi/house-door";
import calendarOutlined from "@iconify/icons-ant-design/calendar-outlined";
import outlineNotifications from "@iconify/icons-ic/outline-notifications";
import calendarPlus from "@iconify/icons-mdi/calendar-plus";
import outlineSettings from "@iconify/icons-ic/outline-settings";
import bxMessageSquareDots from "@iconify/icons-bx/bx-message-square-dots";
import bxFoodMenu from "@iconify/icons-bx/bx-food-menu";

import chefIcon from "@iconify/icons-whh/chef";

//material-ui styles imports
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    textTransform: "none",
    margin: "3px",
    background: "white",
    border: 0,
    borderRadius: 3,
    opacity: 0.5,
    color: "black",
    padding: "5px 20px",
    "&:hover": {
      background: "lightgreen",
    },
    "&:active": {
      background: "#58D573",
      color: "white",
    },
  },
  active: {
    background: "#58D573",
    color: "white",
  },
});

const Sidebar = ({ active }) => {
  const classes = useStyles();
  return (
    <div className="sidebar-container">
      <div>
        <div className="left-side-header">
          <span style={{ color: "#58D473", marginRight: "5px" }}>
            <Icon width="1.1em" icon={chefIcon} />
          </span>
          <span>Neighborhood Chef</span>
        </div>
        <nav className="nav-container">
          <Button
            className={
              active === "neighborhood" ? classes.active : classes.root
            }
          >
            <span style={{ marginRight: "5px" }}>
              <Icon height="20" icon={houseDoor} />
            </span>
            <Link to="/view-events">My Neighborhood</Link>
          </Button>
          <Button
            className={active === "calendar" ? classes.active : classes.root}
          >
            <span style={{ marginRight: "5px" }}>
              <Icon height="20" icon={calendarOutlined} />
            </span>
            <Link to="/calendar">Calendar</Link>
          </Button>
          <Button
            className={
              active === "notifications" ? classes.active : classes.root
            }
          >
            <span style={{ marginRight: "5px" }}>
              <Icon height="20" icon={outlineNotifications} />
            </span>
            <Link to="/notifications">Notifications</Link>
          </Button>
          <Button
            className={active === "createEvent" ? classes.active : classes.root}
          >
            <span style={{ marginRight: "5px" }}>
              <Icon height="20" icon={calendarPlus} />
            </span>
            <Link to="/create-event">Create Event</Link>
          </Button>
          <Button
            className={active === "recipes" ? classes.active : classes.root}
          >
            <span style={{ marginRight: "5px" }}>
              <Icon height="20" icon={bxFoodMenu} />
            </span>
            <Link to="/shared-recipes">Shared Recipes</Link>
          </Button>
          <Button
            className={active === "messages" ? classes.active : classes.root}
          >
            <span style={{ marginRight: "5px" }}>
              <Icon height="20" icon={bxMessageSquareDots} />
            </span>
            <Link to="/messages">Messages</Link>
          </Button>
        </nav>
      </div>
      <div className="settings-button">
        <Button
          className={active === "settings" ? classes.active : classes.root}
        >
          <span style={{ marginRight: "5px" }}>
            <Icon height="20" icon={outlineSettings} />
          </span>
          <Link to="/settings">Settings</Link>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
