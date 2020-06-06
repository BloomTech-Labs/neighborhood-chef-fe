import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { axiosWithAuth } from "../../../utilities/axiosWithAuth";
import { Link } from "react-router-dom";
import moment from "moment";

//component imports
import CalendarRow from "./CalendarRow";

//icon imports
import CircularProgress from "@material-ui/core/CircularProgress";

//graphql imports
import { print } from "graphql";
import { GET_INVITED_EVENTS } from "../../../graphql/users/user-queries";

//action imports
import { getEventsSuccess } from "../../../utilities/actions";

//style import
import { buttonStyles } from "../../../styles";

import { parseTime } from "../../../utilities/functions";

const CalendarView = () => {
  const eventList = useSelector((state) => state.eventList);
  const selectedMonth = useSelector((state) => state.selectedMonth);
  const me = JSON.parse(sessionStorage.getItem("user"));
  const update = useSelector((state) => state.update);
  const dispatch = useDispatch();
  const classes = buttonStyles();
  const [isLoading, setIsLoading] = useState(false);
  const eventsInMonth =
    eventList &&
    eventList.filter((ev) => {
      const parsedTime = parseTime(ev.startTime, ev.endTime);
      const eventMonth = parsedTime.monthShort;
      return eventMonth === moment(selectedMonth).format("MMM");
    });

  useEffect(() => {
    setIsLoading(true);
    axiosWithAuth()({
      url: `${process.env.REACT_APP_BASE_URL}/graphql`,
      method: "post",
      data: {
        query: print(GET_INVITED_EVENTS),
        variables: { id: me.id },
      },
    })
      .then((res) => {
        const sortedByDate = res.data.data.getInvitedEvents.sort(
          (a, b) =>
            parseTime(a.startTime, a.endTime).unixStart -
            parseTime(b.startTime, b.endTime).unixStart
        );
        return sortedByDate;
      })
      .then((res) => {
        const addStatus = res.map((ele) => {
          return {
            ...ele,
            status: ele.users
              ? ele.users.filter((user) => `${user.id}` === `${me.id}`)[0]
                  .status
              : null,
          };
        });
        return addStatus;
      })
      .then((res) => {
        dispatch(getEventsSuccess(res));
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(function () {
        setIsLoading(false);
      });
  }, [dispatch, me.id, update]);

  return (
    <div
      style={{
        overflowY: "auto",
        width: "100%",
        height: "80vh",
      }}
    >
      <div className="calendar-view-main">
        {!isLoading ? (
          !!eventsInMonth && eventsInMonth.length > 0 ? (
            eventsInMonth.map((event, eventNum) => (
              <CalendarRow {...event} key={event.id} eventNum={eventNum} />
            ))
          ) : (
            <div style={{ textAlign: "center" }}>
              <h3>No events for selected month</h3>
              <p>But it doesn't have to stay that way.</p>
              <Link to="/create-event">
                <div className={`${classes.single} ${classes.root}`}>
                  Create New Event
                </div>
              </Link>
            </div>
          )
        ) : (
          <div style={{ textAlign: "center" }}>
            <CircularProgress style={{ color: "#58D573" }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarView;
