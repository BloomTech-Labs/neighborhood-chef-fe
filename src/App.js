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
import ChangePassword from "./components/account/PasswordChangePage";
import FullEvent from "./components/events/single-event/FullEvent";
import CheckEmail from "./components/account/CheckEmail";

import Login from "./components/account/Login";

function App() {
  return (
    <div className="app-container">
      <Switch>
        <Route path="/login-redirect-url" component={LoginRedirect} />
        <Route
          path="/generic-redirect/:redirect_path"
          component={GenericRedirect}
        />
        <Route exact path="/" component={Login} />
        <Route
          path="/initialChangePassword/:string"
          component={ChangePassword}
        />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/create-event" component={CreateEvent} />
        <PrivateRoute path="/view-events" component={ViewEvents} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/settings" component={Settings} />
        <PrivateRoute path="/recipes" component={Recipes} />
        <PrivateRoute path="/notifications" component={Notifications} />
        <PrivateRoute path="/messages" component={Messages} />
        <PrivateRoute path="/events/:id" component={FullEvent} />
        <Route path="/register-check-email" component={CheckEmail} />
      </Switch>
    </div>
  );
}

export default App;
