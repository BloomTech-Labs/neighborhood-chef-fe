import React, { useEffect } from "react";

//component imports
import Sidebar from "../../dashboard/Sidebar";
import MonthPicker from "./MonthPicker";
import CalendarView from "./CalendarView";
import EventDetails from "./EventDetails";
// import AccountButton from "../../account/preferences/AccountButton";
import { useDispatch } from "react-redux";
import { cancelEdit } from "../../../utilities/actions";

const ViewEvents = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cancelEdit());
  }, [dispatch]);

  return (
    <div className="component-main">
      <Sidebar active="view-events" />
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
