import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../Pages/Login/Login";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/sign-up" exact={true} component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
