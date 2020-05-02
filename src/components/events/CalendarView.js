import React from "react";
import { useSelector } from "react-redux";
import CalendarRow from "./CalendarRow";

const CalendarView = () => {
  const eventList = useSelector((state) => state.eventList);
  return (
    <div className="calendar-view-main">
      {!!eventList &&
        eventList.map((event) => <CalendarRow {...event} key={event.id} />)}
    </div>
  );
};

export default CalendarView;
