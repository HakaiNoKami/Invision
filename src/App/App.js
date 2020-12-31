import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={SignIn} />
        <Route path="/sign-up" exact={true} component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
