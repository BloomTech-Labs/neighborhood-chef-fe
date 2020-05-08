import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeActive } from "../../../utilities/actions";

const CalendarRow = ({ id, title, date, start_time, status }) => {
  const activeEvent = useSelector((state) => state.activeCalendarEvent);
  const dispatch = useDispatch();
  var options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(parseInt(date)); //formats 13 digit UNIX date provided by database
  const simplifiedDate = formattedDate.toLocaleDateString("en-us", options); // reduces to just YYYY MM, DD format
  const addStartTime = new Date(`${simplifiedDate} ${start_time}`); // creates new date using start_time value for time, instead of 00:00:00 default
  const getWeekday = addStartTime.toLocaleDateString("en-us", {
    weekday: "short",
  });
  const getDay = addStartTime.toLocaleDateString("en-us", {
    day: "numeric",
  });
  const displayedHoursMins = addStartTime
    .toLocaleTimeString([], {
      //formatting just time in 12 hr format with lower case am pm
      hour: "numeric",
      minute: "2-digit",
    })
    .toLowerCase();

  return (
    <div
      className={`calendar-row ${activeEvent === id && "calendar-row-active"}`}
      onClick={() => dispatch(makeActive(id))}
    >
      <div style={{ width: "15%" }}>
        <div style={{ opacity: ".5" }}>{getWeekday}</div>
        <div style={{ fontSize: "3rem" }}>{getDay}</div>
      </div>
      <div
        style={{
          borderLeft: "1px solid rgba(0,0,0,.1)",
          paddingLeft: "20px",
          width: "65%",
        }}
      >
        <div style={{ opacity: ".5" }}>{title}</div>
        <div
          style={
            status === "Not Going"
              ? { color: "rgba(232, 64, 64, .75)" }
              : status === "Maybe"
              ? { color: "rgba(255, 169, 40, .75)" }
              : { color: "rgba(33, 186, 66, .75)" }
          }
        >
          {status}
        </div>
      </div>
      <div style={{ opacity: ".3", width: "20%" }}>{displayedHoursMins}</div>
    </div>
  );
};

export default CalendarRow;
