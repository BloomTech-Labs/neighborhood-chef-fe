import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
// import Feed from "./Feed";
import RecentEvents from "./RecentEvents";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { cancelEdit } from "../../utilities/actions";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cancelEdit());
  }, [dispatch]);

  return (
    <div className="dashboard-container">
      <Sidebar active="dashboard" />
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
