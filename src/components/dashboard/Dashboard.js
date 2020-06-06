import React from "react";
// import Feed from "./Feed";
import RecentEvents from "./RecentEvents";


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
