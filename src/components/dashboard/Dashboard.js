import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import RecentEvents from "./RecentEvents";
import Header from "./Header";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar active="dashboard" />
      <div className="dashboard-main">
        <Header />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Feed />
          <RecentEvents />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
