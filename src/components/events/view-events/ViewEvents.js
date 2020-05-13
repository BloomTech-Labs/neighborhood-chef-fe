import React from "react";

//component imports
import Sidebar from "../../dashboard/Sidebar";
import MonthPicker from "./MonthPicker";
import CalendarView from "./CalendarView";
import EventDetails from "./EventDetails";
<<<<<<< HEAD:src/components/events/ViewEvents.js
import AccountButton from "../account/preferences/AccountButton";
=======
import Header from "../../dashboard/Header";
>>>>>>> 8783f53fb55c66feec24e426e2c9e23a42b7618a:src/components/events/view-events/ViewEvents.js

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
