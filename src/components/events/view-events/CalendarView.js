import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

import CalendarRow from "./CalendarRow";

//graphql imports
import { print } from "graphql";
import { GET_INVITED_EVENTS } from "../../../graphql/users/user-queries";

//action imports
import { getEventsSuccess } from "../../../utilities/actions";

//style import
import { buttonStyles } from "../../../styles";

const CalendarView = () => {
  const eventList = useSelector((state) => state.eventList);
  const update = useSelector((state) => state.update);
  const selectedMonth = useSelector((state) => state.selectedMonth);
  const me = useSelector((state) => state.myUser);
  const dispatch = useDispatch();
  const classes = buttonStyles();
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

  useEffect(() => {
    axios({
      url: "http://localhost:5100/graphql",
      method: "post",
      data: {
        query: print(GET_INVITED_EVENTS),
        variables: { id: me.id },
      },
    })
      .then((res) => {
        dispatch(getEventsSuccess(res.data.data.getInvitedEvents));
      })
      .catch((err) => {
        console.log(err.message);
      });
    // eslint-disable-next-line
  }, [update]);

  return (
    <div className="calendar-view-main">
      {!!eventsInMonth && eventsInMonth.length > 0 ? (
        eventsInMonth.map((event) => <CalendarRow {...event} key={event.id} />)
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
      )}
    </div>
  );
};

export default CalendarView;
