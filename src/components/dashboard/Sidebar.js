import React from "react";
import { Link } from "react-router-dom";
import { Icon, InlineIcon } from "@iconify/react";
import houseDoor from "@iconify/icons-bi/house-door";
import calendarOutlined from "@iconify/icons-ant-design/calendar-outlined";
import outlineNotifications from "@iconify/icons-ic/outline-notifications";
import calendarPlus from "@iconify/icons-mdi/calendar-plus";
import bookIcon from "@iconify/icons-jam/book";
import outlineTextsms from "@iconify/icons-ic/outline-textsms";
import outlineSettings from "@iconify/icons-ic/outline-settings";

const Sidebar = () => {
  return (
    <nav className="sidebar-container">
      <div>
        <Icon icon={houseDoor} />
        <Link to="/view-events">Your Neighborhood</Link>
      </div>
      <div>
        <Icon icon={calendarOutlined} />
        <Link to="/calendar">Calendar</Link>
      </div>
      <div>
        <Icon icon={outlineNotifications} />
        <Link to="/notifications">Notifications</Link>
      </div>
      <div>
        <Icon icon={calendarPlus} />
        <Link to="/create-event">Create Event</Link>
      </div>
      <div>
        <Icon icon={bookIcon} />
        <Link to="/shared-recipes">Shared Recipes</Link>
      </div>
      <div>
        <Icon icon={outlineTextsms} />
        <Link to="/messages">Messages</Link>
      </div>
      <div>
        <Icon icon={outlineSettings} />
        <Link to="/settings">Settings</Link>
      </div>
    </nav>
  );
};

export default Sidebar;
