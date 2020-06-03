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
  useEffect(() => {
    if (ls.get("access_token")) {
      const token = ls.get("access_token");
      const decodedToken = jwt(token).sub;
      axiosWithAuth()({
        url: `${process.env.REACT_APP_BASE_URL}/graphql`,
        method: "post",
        data: {
          query: print(USER_BY_EMAIL),
          variables: { input: { email: decodedToken } },
        },
      }).then((res) => {
        sessionStorage.setItem(
          "user",
          JSON.stringify(res.data.data.getUserByEmail)
        );
      });
    }
  }, []);

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
