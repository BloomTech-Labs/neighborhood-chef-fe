import React from "react";
import RecentCard from "./RecentCard";

const recentEventsList = [
  {
    name: "test name",
    date_created: new Date(2222222222222),
    photo: "",
    title: "summer BBQ",
    date: new Date(2223333333333),
    status: "Not Going",
  },
  {
    name: "test name1",
    date_created: new Date(2222222222222),
    photo: "",
    title: "summer BBQ",
    date: new Date(2223333333333),
    status: "Not Going",
  },
  {
    name: "test name 3",
    date_created: new Date(2222222222222),
    photo: "",
    title: "summer BBQ",
    date: new Date(2223333333333),
    status: "Not Going",
  },
];

const RecentEvents = () => {
  return (
    <div className="recent-events-container">
      <h3 style={{ marginLeft: "12px" }}>Neighborhood</h3>
      {!!recentEventsList &&
        recentEventsList.map((ele) => <RecentCard {...ele} key={ele.name} />)}
    </div>
  );
};

export default RecentEvents;
