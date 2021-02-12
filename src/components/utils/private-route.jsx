import React, { useState, useEffect } from "react";
import { useHistory, Route } from "react-router-dom";
import ls from "local-storage";
import axios from "axios";

const qs = require("querystring");

function PrivateRoute({ component: Component, path, ...props }) {
  const [finalComponent, setFinalComponent] = useState(null);

  const { push } = useHistory();

  useEffect(() => {
    const validate = async () => {
      try {
        if (ls.get("access_token")) {
          const body = {
            token: ls.get("access_token"),
            token_type_hint: "access_token",
            client_id: "0oa5rm6uhfY70s8QA5d6",
          };

          const response = await axios.post(
            "https://dev-36383529.okta.com/oauth2/default/v1/introspect",
            qs.stringify(body)
          );

          if (
            response.status.toString().match(/2[0-9][0-9]/) &&
            response.data.active
          ) {
            setFinalComponent(
              <Route {...props} path={path} component={Component} />
            );
          } else {
            push("/");
          }
        } else push("/");
      } catch (err) {
        console.dir(err);
      }
    };

    validate();
    // eslint-disable-next-line
  }, [path, Component]);

  return finalComponent;
}

export default PrivateRoute;
