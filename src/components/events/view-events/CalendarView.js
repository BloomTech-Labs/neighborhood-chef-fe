import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

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

const CalendarView = () => {
  const eventList = useSelector((state) => state.eventList);
  const update = useSelector((state) => state.update); //seemingly because of how status is nested into events, there is no direct dispatch that will force re-render of this component without the use of update state. Unsure if this is the best approach.
  const selectedMonth = useSelector((state) => state.selectedMonth);
  const me = useSelector((state) => state.myUser);
  const dispatch = useDispatch();
  const classes = buttonStyles();
  const [isLoading, setIsLoading] = useState(false);
  const eventsInMonth =
    eventList &&
    eventList.filter(
      (ev) =>
        new Date(parseInt(ev.date)).toLocaleDateString("en-us", {
          month: "short",
          year: "numeric",
        }) ===
        selectedMonth.toLocaleDateString("en-us", {
          month: "short",
          year: "numeric",
        })
    );
  const [eventNum, setEventNum] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    axios({
      url: process.env.REACT_APP_URL,
      method: "post",
      data: {
        query: print(GET_INVITED_EVENTS),
        variables: { id: me.id },
      },
    })
      .then((res) => {
        dispatch(
          getEventsSuccess(
            res.data.data.getInvitedEvents.sort((a, b) => a.date - b.date)
          )
        );
      })
      .catch((err) => {
        console.log(err.message);
      })
      .then(function () {
        setIsLoading(false);
      });
    // eslint-disable-next-line
  }, [update]);

  return (
    <div
      style={{
        overflowY: "scroll",
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
              <br />
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
            <CircularProgress />
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarView;
