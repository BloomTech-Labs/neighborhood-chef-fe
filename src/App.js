import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/utils/private-route";
import GenericRedirect from "./components/utils/generic-redirect";
import LoginRedirect from "./components/utils/login-redirect";
import Register from "./components/account/Register.js";
import ViewEvents from "./components/events/view-events/ViewEvents";
import CreateEvent from "./components/events/create-event/CreateEvent";
import Dashboard from "./components/dashboard/Dashboard";
import Settings from "./components/other/Settings";
import Recipes from "./components/other/Recipes";
import Notifications from "./components/other/Notifications";
import Messages from "./components/other/Messages";
import ChangePassword from './components/account/PasswordChangePage';

import Login from "./components/account/Login";

function App() {
  return (
    <div className="app-container">
      <Switch>
        {/*redirect depricated  in react router v6. need to use server side redirect most likely*/}
        <Route path="/login-redirect-url" component={LoginRedirect} />
        <Route
          path="/generic-redirect/:redirect_path"
          component={GenericRedirect}
        />
        <Route path="/initialChangePassword/:string" component={ChangePassword} /> 
        <Route exact path="/" component={Dashboard} />{" "}
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/create-event" component={CreateEvent} />
        <Route path="/view-events" component={ViewEvents} />
        <Route path="/register" component={Register} />
        <Route path="/settings" component={Settings} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/messages" component={Messages} />
      </Switch>
    </div>
  );
}

export default App;
