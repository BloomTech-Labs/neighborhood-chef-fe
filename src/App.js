import React from 'react';
import './App.css';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/utils/private-route';
import GenericRedirect from './components/utils/generic-redirect';
import LoginRedirect from './components/utils/login-redirect';
import Register from './components/register/Register';
import ChangePassword from './components/change-password/PasswordChangePage';
import CheckEmail from './components/check-email/CheckEmail';
import AboutUs from './components/about/AboutUs';
import Community from './components/community/Community';

import Login from './components/login/Login';
import GridStructure from './components/shared/grid-structure/gridstructure';

function App() {
  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/wakeup`)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ margin: '0%' }}>
      <Switch>
        <Route path="/login-redirect-url" component={LoginRedirect} />
        <Route path="/generic-redirect/:redirect_path" component={GenericRedirect} />
        <Route exact path="/" component={Login} />
        <Route path="/initialChangePassword/:string" component={ChangePassword} />
        <PrivateRoute path="/dashboard" component={GridStructure} />
        <PrivateRoute path="/create-event" component={GridStructure} />
        <PrivateRoute path="/create-event/:event_string" component={GridStructure} />
        <PrivateRoute path="/view-events" component={GridStructure} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/events/:id" component={GridStructure} />
        <Route path="/register-check-email" component={CheckEmail} />
        <Route path="/community" component={Community} />
        <Route path="/about" component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App;
