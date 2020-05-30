import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosWithAuth } from "../../../utilities/axiosWithAuth";
import { print } from "graphql";
import { EVENT_BY_ID } from "../../../graphql/events/event-queries";
import { getSingleEvent } from "../../../utilities/actions";
import Sidebar from "../../dashboard/Sidebar";
import { startEventEdit } from "../../../utilities/actions";
import { convertTimeAndDate } from "../../../utilities/functions";

import { useHistory } from "react-router-dom";

import Grow from "@material-ui/core/Grow";

const FullEvent = ({ match }) => {
  const me = JSON.parse(sessionStorage.getItem("user"));
  // const me = useSelector((state) => state.myUser);
  const { push } = useHistory();
  const eventId = parseInt(match.params.id);
  const dispatch = useDispatch();
  const currentEvent = useSelector((state) => state.currentEvent);
  useEffect(() => {
    axiosWithAuth()({
      url: `${process.env.REACT_APP_BASE_URL}/graphql`,
      method: "post",
      data: {
        query: print(EVENT_BY_ID),
        variables: { id: eventId },
      },
    })
      .then((res) => {
        dispatch(getSingleEvent(res.data.data.getEventById));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div
      className="single-event-container"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Sidebar />
      <Grow in style={{ transformOrigin: "200 200 200" }}>
        <div className="single-event-box">
          <h1>FullEvent data dump</h1>
          {currentEvent ? (
            <pre>{JSON.stringify(currentEvent, null, 2)}</pre>
          ) : (
            ""
          )}
          {`${me.id}` === `${currentEvent.user_id}` && (
            <button
              onClick={() => {
                /* had to add date to eventToEdit object and convert start/end times here for editing 
                    mode to allow moment functions to finish converting before the form rendered */
                const convertForEdit = convertTimeAndDate(currentEvent);
                currentEvent.date = convertForEdit.date;
                currentEvent.startTime = convertForEdit.startTime;
                currentEvent.endTime = convertForEdit.endTime;
                dispatch(startEventEdit(currentEvent));
                push("/create-event");
              }}
            >
              Edit
            </button>
          )}
        </div>
      </Grow>
    </div>
  );
};

export default FullEvent;
