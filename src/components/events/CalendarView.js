import React from "react";
import { useSelector } from "react-redux";
import CalendarRow from "./CalendarRow";

const CalendarView = () => {
  const addedEvents = useSelector((state) => state.addedEvents);
  return (
    <div className="calendar-view-main">
      {!!addedEvents &&
        addedEvents.map((event) => (
          <CalendarRow {...event} key={event.title} />
        ))}
    </div>
  );
};

export default CalendarView;
