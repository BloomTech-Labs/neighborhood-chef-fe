import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <h1>Dashboard Component</h1>
      <div className="dashboard-main">
        <Sidebar active="dashboard" />
      </div>
    </div>
  );
};

export default Dashboard;
