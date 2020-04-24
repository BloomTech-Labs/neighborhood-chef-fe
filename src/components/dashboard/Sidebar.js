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

//material-ui styles imports
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    background: "white",
    border: 0,
    borderRadius: 3,
    opacity: 0.5,
    color: "black",
    height: 32,
    padding: "0 30px",
    "&:hover": {
      background: "lightgreen",
    },
    "&:active": {
      background: "#58D573",
      color: "white",
    },
  },
});

const Sidebar = ({ active }) => {
  const classes = useStyles();
  return (
    <>
      <p>Hello</p>
      <nav className="sidebar-container">
        <Button className={classes.root}>
          <span style={{ marginRight: "5px" }}>
            <Icon height="20" icon={houseDoor} />
          </span>
          <Link to="/view-events">Your Neighborhood</Link>
        </Button>
        <Button className={classes.root}>
          <span style={{ marginRight: "5px" }}>
            <Icon height="20" icon={calendarOutlined} />
          </span>
          <Link to="/calendar">Calendar</Link>
        </Button>
        <Button className={classes.root}>
          <span style={{ marginRight: "5px" }}>
            <Icon height="20" icon={outlineNotifications} />
          </span>
          <Link to="/notifications">Notifications</Link>
        </Button>
        <Button className={classes.root}>
          <span style={{ marginRight: "5px" }}>
            <Icon height="20" icon={calendarPlus} />
          </span>
          <Link to="/create-event">Create Event</Link>
        </Button>
        <Button className={classes.root}>
          <span style={{ marginRight: "5px" }}>
            <Icon height="20" icon={bxFoodMenu} />
          </span>
          <Link to="/shared-recipes">Shared Recipes</Link>
        </Button>
        <Button className={classes.root}>
          <span style={{ marginRight: "5px" }}>
            <Icon height="20" icon={bxMessageSquareDots} />
          </span>
          <Link to="/messages">Messages</Link>
        </Button>
        <Button className={classes.root}>
          <span style={{ marginRight: "5px" }}>
            <Icon height="20" icon={outlineSettings} />
          </span>
          <Link to="/settings">Settings</Link>
        </Button>
      </nav>
    </>
  );
};

export default Sidebar;
