import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CalendarRow from "./CalendarRow";

const CalendarView = () => {
  const eventList = useSelector((state) => state.eventList);
  const selectedMonth = useSelector((state) => state.selectedMonth);
  const eventsInMonth = eventList.filter(
    (ev) =>
      new Date(ev.date).toLocaleDateString("en-us", {
        month: "short",
        year: "numeric",
      }) ===
      selectedMonth.toLocaleDateString("en-us", {
        month: "short",
        year: "numeric",
      })
  );
  return (
    <div className="calendar-view-main">
      {!!eventsInMonth && eventsInMonth.length > 0 ? (
        eventsInMonth.map((event) => <CalendarRow {...event} key={event.id} />)
      ) : (
        <>
          <h3>No events for selected month</h3>
          <br />
          <p>But it doesn't have to stay that way.</p>
          <Link to="/create-event">
            <button>Create New Event</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default CalendarView;
