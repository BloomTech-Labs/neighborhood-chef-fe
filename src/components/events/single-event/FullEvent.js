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

import EventDetails from "../view-events/EventDetails";
import ParticipantCard from "./ParticipantsCard";
import ShareCard from "./ShareCard";
import CommentsCard from "./CommentsCard";

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
  }, [dispatch, eventId]);
  return (
    <div className="single-event-container">
      <Sidebar />
      <Grow in style={{ transformOrigin: "200 200 200" }}>
        <div className="single-event-box">
          {currentEvent ? (
            <>
              <EventDetails />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div style={{ display: "flex" }}>
                  <ParticipantCard />
                  <ShareCard />
                </div>
                <CommentsCard />
              </div>
            </>
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
