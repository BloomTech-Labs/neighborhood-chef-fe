import React, { useEffect } from "react";
// import Feed from "./Feed";
import RecentEvents from "./RecentEvents";
import Header from "./Header";


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
