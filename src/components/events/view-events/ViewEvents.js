import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

//action imports
import { getEvents, getEventsSuccess } from "../../../utilities/actions";

//component imports
import Sidebar from "../../dashboard/Sidebar";
import MonthPicker from "./MonthPicker";
import CalendarView from "./CalendarView";
import EventDetails from "./EventDetails";
import Header from "../../dashboard/Header";

const ViewEvents = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getEvents);
    axios({
      url: "http://localhost:5100/graphql",
      method: "post",
      data: {
        query: `
          query getAllEvents {
          getAllEvents {
            id
            Date
            Start_Time
            End_Time
            Title
            Description
            category_id
            user_id
            Address
            Latitude
            Longitude
          }
        }`,
      },
    })
      .then((res) => {
        console.log(res);
        dispatch(getEventsSuccess(res.data.data.getAllEvents));
      })
      .catch((err) => {
        console.log(err.message);
        // dispatch({ type: GET_EVENTS_FAIL, payload: err.message });
      });
  }, []);

  return (
    <div className="component-main">
      <Sidebar active="view-events" />
      <div className="middle-calendar">
        <MonthPicker />
        <CalendarView />
      </div>
      <div className="right-side-calendar">
        <Header />
        <EventDetails />
      </div>
    </div>
  );
};

export default ViewEvents;
