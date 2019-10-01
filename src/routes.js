import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Landing from "./components/Landing";
import Categories from './components/Categories'

export default (
  <Switch>
    <Route exact path="/Home" component={Home} />
    <Route path="/Auth" component={Auth} />
    <Route path="/Landing" component={Landing} />
    <Route path="/Categories" component={Categories} />
  </Switch>
);
