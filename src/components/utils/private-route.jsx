import React, { useState, useEffect } from "react";
import { useHistory, Route } from "react-router-dom";
import useValidate from "../../hooks/useValidate";

const qs = require("querystring");

//const PrivateRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if () {
//           return <Component {...props} />;
//         } else {
//           return <Redirect to="/login" />;
//         }
//       }}
//     />
//   );
// };

function PrivateRoute({ component: Component, path, ...props }) {
  const { push } = useHistory();

  let env = process.env.REACT_APP_FRONT_END_BASE_URL.includes("localhost")
    ? "development"
    : "production";

  const { validate, response, requestMade } = useValidate();

  useEffect(() => {
    validate(env);
    // eslint-disable-next-line
  }, [path, Component]);

  if (!response) {
    return <p>...loading</p>;
  }

  if (
    env === "production" &&
    response.status.toString().match(/2[0-9][0-9]/) &&
    response.data.active
  ) {
    return <Route {...props} path={path} component={Component} />;
  } else if (env == "development" && response.data.success) {
    return <Route {...props} path={path} component={Component} />;
  } else if (requestMade) {
    push("/");
  }
  return null;
}

export default PrivateRoute;
