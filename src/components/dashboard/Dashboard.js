import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
// import Feed from "./Feed";
import RecentEvents from "./RecentEvents";
import Header from "./Header";
import ls from "local-storage";
import jwt from "jwt-decode";
import { USER_BY_EMAIL } from "../../graphql/users/user-queries";
import { axiosWithAuth } from "../../utilities/axiosWithAuth";
import { print } from "graphql";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-main">
        <div
        // style={{
        //   display: "flex",
        //   justifyContent: "space-evenly",
        //   alignSelf: "center",
        // }}
        >
          {/* feed data is not functional, not implemented on back end yet */}
          {/* <Feed /> */}
          <RecentEvents />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
