import React from "react";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-main">
        <Sidebar active="dashboard" />
        <p>Dashboard Component</p>
      </div>
    </div>
  );
};

export default Dashboard;
