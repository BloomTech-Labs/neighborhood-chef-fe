import React from "react";
import { Link } from "react-router-dom";

import HouseOutlinedIcon from "@material-ui/icons/HouseOutlined";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
import SmsOutlinedIcon from "@material-ui/icons/SmsOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";

const Sidebar = () => {
  return (
    <nav className="sidebar-container">
      <div>
        <HouseOutlinedIcon />
        <Link to="/view-events">Your Neighborhood</Link>
      </div>
      <div>
        <EventOutlinedIcon />
        <Link to="/calendar">Calendar</Link>
      </div>
      <div>
        <NotificationsNoneOutlinedIcon />
        <Link to="/notifications">Notifications</Link>
      </div>
      <div>
        <AddBoxOutlinedIcon />
        <Link to="/create-event">Create Event</Link>
      </div>
      <div>
        <BookOutlinedIcon />
        <Link to="/shared-recipes">Shared Recipes</Link>
      </div>
      <div>
        <SmsOutlinedIcon />
        <Link to="/messages">Messages</Link>
      </div>
      <div>
        <SettingsOutlinedIcon />
        <Link to="/settings">Settings</Link>
      </div>
    </nav>
  );
};

export default Sidebar;
