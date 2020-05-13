import React from "react";
import RecentCard from "./RecentCard";

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
  return (
    <div className="recent-events-container">
      <h3 style={{ marginLeft: "12px" }}>Newest Events</h3>
      {!!recentEventsList &&
        recentEventsList.map((ele) => <RecentCard {...ele} key={ele.id} />)}
    </div>
  );
};

export default RecentEvents;
