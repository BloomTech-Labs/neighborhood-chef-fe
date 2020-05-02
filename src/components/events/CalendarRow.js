import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeActive } from "../../utilities/actions";

const CalendarRow = ({ id, title, date, time, status }) => {
  const activeEvent = useSelector((state) => state.activeCalendarEvent);
  const dispatch = useDispatch();
  const formattedDate = new Date(date);
  const getWeekday = formattedDate.toLocaleDateString("en-us", {
    weekday: "short",
  });
  const getDay = formattedDate.toLocaleDateString("en-us", {
    day: "numeric",
  });
  return (
    <div
      className={`calendar-row ${activeEvent === id && "calendar-row-active"}`}
      onClick={() => dispatch(makeActive(id))}
    >
      <div style={{ width: "25%" }}>
        <div style={{ opacity: ".5" }}>{getWeekday}</div>
        <div style={{ fontSize: "3rem" }}>{getDay}</div>
      </div>
      <div
        style={{
          borderLeft: "1px solid rgba(0,0,0,.1)",
          paddingLeft: "10px",
          width: "65%",
        }}
      >
        <div style={{ opacity: ".5" }}>{title}</div>
        <div
          style={
            status === "Not Going"
              ? { color: "rgba(224, 0, 0, .75)" }
              : status === "Maybe"
              ? { color: "rgba(255, 169, 40, .75)" }
              : { color: "rgba(33, 186, 66, .75)" }
          }
        >
          {status}
        </div>
      </div>
      <div style={{ opacity: ".3", width: "10%" }}>{time}</div>
    </div>
  );
};

export default CalendarRow;
