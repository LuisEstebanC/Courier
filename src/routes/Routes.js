import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Home" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default Routes;
