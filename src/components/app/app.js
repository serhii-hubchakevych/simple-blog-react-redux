import React from "react";
import { Route, Switch } from "react-router-dom";

import "./app.css";
import { BlogPage, LoginPage, RegisterPage, DashboardPage } from "../pages";

const App = () => {
  return (
    <main role="main" >
      <Switch>
        <Route path="/" component={BlogPage} exact></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/register" component={RegisterPage}></Route>
        <Route path="/dashboard" component={DashboardPage}></Route>
      </Switch>
    </main>
  );
};

export default App;