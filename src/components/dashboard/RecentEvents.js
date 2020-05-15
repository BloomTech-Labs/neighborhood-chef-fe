import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import RecentCard from "./RecentCard";
import { print } from "graphql";
import { GET_INVITED_EVENTS } from "../../graphql/users/user-queries";
import { getEventsSuccess } from "../../utilities/actions";

const recentEventsList = [
  {
    id: 1,
    name: "test name",
    date_created: new Date(1555555555555),
    photo: "",
    title: "summer BBQ",
    date: new Date(2223333333333),
    status: "Not Going",
  },
  {
    id: 2,
    name: "test name1",
    date_created: new Date(3333333333333),
    photo: "",
    title: "summer BBQ",
    date: new Date(2223333333333),
    status: "Not Going",
  },
  {
    id: 3,
    name: "test name 3",
    date_created: new Date(3333333333333),
    photo: "",
    title: "summer BBQ",
    date: new Date(2223333333333),
    status: "Not Going",
  },
];

const RecentEvents = () => {
  const me = useSelector((state) => state.myUser);
  const eventList = useSelector((state) => state.eventList);
  const dispatch = useDispatch();

  useEffect(() => {
    axios({
      url: process.env.REACT_APP_URL,
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
  }, []);
  return (
    <div className="recent-events-container">
      <h3 style={{ marginLeft: "12px" }}>Newest Events</h3>
      {!!eventList &&
        eventList.map((ele) => <RecentCard {...ele} key={ele.id} />)}
    </div>
  );
};

export default RecentEvents;
