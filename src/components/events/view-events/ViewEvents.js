import React from "react";

//component imports
import Sidebar from "../../dashboard/Sidebar";
import MonthPicker from "./MonthPicker";
import CalendarView from "./CalendarView";
import EventDetails from "./EventDetails";
// import AccountButton from "../../account/preferences/AccountButton";

const ViewEvents = () => {
  return (
    <div className="component-main">

      <div className="middle-calendar">
        <MonthPicker />
        <CalendarView />
      </div>
      <div className="right-side-calendar">
        {/* account button not currently functional */}
        {/* <AccountButton /> */}
        <EventDetails />
      </div>
    </div>
  );
};

export default ViewEvents;
