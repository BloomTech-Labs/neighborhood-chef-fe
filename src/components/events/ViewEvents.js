import React from "react";
import Sidebar from "../dashboard/Sidebar";
import MonthPicker from "./MonthPicker";
import CalendarView from "./CalendarView";
import EventDetails from "./EventDetails";
import AccountButton from "../account/preferences/AccountButton";

const ViewEvents = () => {
  return (
    <div className="component-main">
      <Sidebar active="view-events" />
      <div className="middle-calendar">
        <MonthPicker />
        <CalendarView />
      </div>
      <div className="right-side-calendar">
        <AccountButton />
        <EventDetails />
      </div>
    </div>
  );
};

export default ViewEvents;
