import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { print } from "graphql";
import { EVENT_BY_ID } from "../../../graphql/events/event-queries";
import { getSingleEvent } from "../../../utilities/actions";

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
    <div>
      <h1>FullEvent data dump</h1>
      {currentEvent ? (
        <div>
          <p>title: {currentEvent.title}</p>
          <p>description: {currentEvent.description}</p>
          <p>address: {currentEvent.address}</p>
          <p>latitude: {currentEvent.latitude}</p>
          <p>longitude: {currentEvent.longitude}</p>
          <p>createDateTime: {currentEvent.createDateTime}</p>
          <p>date: {currentEvent.date}</p>
          <p>startTime: {currentEvent.startTime}</p>
          <p>endTime: {currentEvent.endTime}</p>
          <p>modifiers: {JSON.stringify(currentEvent.modifiers)}</p>
          <p>category id: {currentEvent.category_id}</p>
          <p>creator id: {currentEvent.user_id}</p>
          <p>attending: {currentEvent.users && currentEvent.users.length}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FullEvent;
