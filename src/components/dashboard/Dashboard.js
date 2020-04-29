import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-main">
        <Sidebar active="dashboard" />
        <p>content here</p>
      </div>
    </div>
  );
};

export default Dashboard;
