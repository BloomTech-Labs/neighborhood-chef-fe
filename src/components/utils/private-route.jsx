import React, { useState, useEffect } from 'react';
import { useHistory, Route } from 'react-router-dom';
import { axiosWithAuth } from '../../utilities/axiosWithAuth';
import ls from 'local-storage';
import axios from 'axios';

const qs = require('querystring');

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
  const [response, setResponse] = useState(null);
  const [requestMade, setRequestMade] = useState(false);
  const { push } = useHistory();

  useEffect(() => {
    const validate = async () => {
      let res;
      try {
        if (ls.get('access_token')) {
          if (!process.env.REACT_APP_FRONT_END_BASE_URL.includes('localhost')) {
            const body = {
              token: ls.get('access_token'),
              token_type_hint: 'access_token',
              client_id: process.env.REACT_APP_CLIENT_ID,
            };
            res = await axios.post(
              'https://dev-36383529.okta.com/oauth2/default/v1/introspect',
              qs.stringify(body)
            );
            setResponse(res);
          } else {
            res = await axiosWithAuth().post(
              'http://localhost:5100/authenticate',
              {}
            );
            setResponse(res);
          }
          setRequestMade(true);
        }
      } catch (err) {
        console.dir(err);
      }
    };

    validate();
    // eslint-disable-next-line
  }, [path, Component]);

  if (!response) {
    return <p>...loading</p>;
  }
  if (response.status.toString().match(/2[0-9][0-9]/) && response.data.active) {
    return <Route {...props} path={path} component={Component} />;
  }
  if (response.data.success) {
    return <Route {...props} path={path} component={Component} />;
  }
  if (!response.data.success && requestMade) {
    push('/');
  }
  return null;
}

export default PrivateRoute;
