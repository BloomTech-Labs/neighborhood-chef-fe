import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { print } from "graphql";
import { EVENT_BY_ID } from "../../../graphql/events/event-queries";
import { getSingleEvent } from "../../../utilities/actions";
import Sidebar from "../../dashboard/Sidebar";

const FullEvent = ({ match }) => {
  const eventId = parseInt(match.params.id);
  const dispatch = useDispatch();
  const currentEvent = useSelector((state) => state.currentEvent);
  useEffect(() => {
    axios({
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
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Sidebar />
      <h1>FullEvent data dump</h1>
      {currentEvent ? <pre>{JSON.stringify(currentEvent, null, 2)}</pre> : ""}
    </div>
  );
};

export default FullEvent;
