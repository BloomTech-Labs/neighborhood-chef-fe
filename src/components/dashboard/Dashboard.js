import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import RecentEvents from "./RecentEvents";
import Header from "./Header";
import AccountButton from "../account/preferences/AccountButton";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar active="dashboard" />
      <div>
        <Header />
        <div style={{ display: "flex" }}>
          <Feed />
          <RecentEvents />
        </div>
      </div>
      <AccountButton />
    </div>
  );
};

export default Dashboard;
