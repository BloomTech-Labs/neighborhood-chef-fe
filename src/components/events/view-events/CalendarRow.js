import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeActive } from "../../../utilities/actions";
import { parseTime } from "../../../utilities/functions";

const CalendarRow = ({ id, title, startTime, users, eventNum }) => {
  const activeEvent = useSelector((state) => state.activeCalendarEvent);
  // const me = useSelector((state) => state.myUser);
  const me = JSON.parse(sessionStorage.getItem("user"));
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
  const timeObject = parseTime(startTime, null);

  return (
    <div
      className={`calendar-row ${
        parseInt(eventNum) % 2 === 0 && "calendar-row-even"
      } ${activeEvent === id && "calendar-row-active"}`}
      onClick={() => dispatch(makeActive(id))}
    >
      <div style={{ width: "15%" }}>
        <div style={{ opacity: ".5" }}>{timeObject.weekday}</div>
        <div style={{ fontSize: "3rem" }}>{timeObject.day}</div>
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
      <div style={{ opacity: ".3", width: "20%" }}>{timeObject.startTime}</div>
    </div>
  );
};

export default CalendarRow;
