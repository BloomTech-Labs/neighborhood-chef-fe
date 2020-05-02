import React from "react";

const CalendarRow = ({ title, date, time, status }) => {
  return (
    <div className="calendar-row">
      <div>{date}</div>
      <div>
        <div>{title}</div>
        <div>{status}</div>
      </div>
      <div>{time}</div>
    </div>
  );
};

export default CalendarRow;
