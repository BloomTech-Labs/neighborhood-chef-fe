import React, { useEffect } from "react";
// import Feed from "./Feed";
import RecentEvents from "./RecentEvents";
import Header from "./Header";


const Dashboard = () => {

  return (
    <div className="dashboard-container">
      
      <div className="dashboard-main">
        <Header />
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
