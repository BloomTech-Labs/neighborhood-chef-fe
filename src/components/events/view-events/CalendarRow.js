import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeActive } from "../../../utilities/actions";

const CalendarRow = ({ id, title, date, startTime, users }) => {
  const activeEvent = useSelector((state) => state.activeCalendarEvent);
  const me = useSelector((state) => state.myUser);
  const dispatch = useDispatch();
  let status;

  //find status

  if (users) {
    const tempArray = users.filter((user) => `${user.id}` === `${me.id}`);
    if (tempArray.length > 0) {
      status = tempArray[0].status;
    }
  }

  //time formatting
  var options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(parseInt(date)); //formats 13 digit UNIX date provided by database
  const simplifiedDate = formattedDate.toLocaleDateString("en-us", options); // reduces to just YYYY MM, DD format
  const addStartTime = new Date(`${simplifiedDate}, ${startTime}`); // creates new date using start_time value for time, instead of 00:00:00 default
  const getWeekday = addStartTime.toLocaleDateString("en-us", {
    weekday: "short",
  });
  const getDay = addStartTime.toLocaleDateString("en-us", {
    day: "numeric",
  });
  const displayedHoursMins = addStartTime
    .toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    })
    .toLowerCase(); //formatting just time in 12 hr format with lower case am pm

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
        <div>
          <span
            style={
              status === "Not Going"
                ? { color: "rgba(232, 64, 64, .75)" }
                : status === "Maybe"
                ? { color: "rgba(255, 169, 40, .75)" }
                : status === "Going"
                ? { color: "rgba(33, 186, 66, .75)" }
                : { color: "rgba(0,0,0, .3)" }
            }
          >
            {status || "undecided"}
          </span>
        </div>
      </div>
      <div style={{ opacity: ".3", width: "20%" }}>{displayedHoursMins}</div>
    </div>
  );
};

export default CalendarRow;