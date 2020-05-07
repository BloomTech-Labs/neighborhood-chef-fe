import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import RecentEvents from "./RecentEvents";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="component-main">
        <Sidebar active="dashboard" />
        <Feed />
        <RecentEvents />
      </div>
    </div>
  );
};

export default Dashboard;
