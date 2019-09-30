import React, { Component } from "react";
import Donor from "./Donor";
import Donee from "./Donee";
import Categories from "./Categories";
import { Switch, Route } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div>
        Im Landing
        <Switch>
          <Route path="/Donor" component={Donor} />
          <Route path="/Donee" component={Donee} />
          <Route path="/Categories" component={Categories} />
        </Switch>
      </div>
    );
  }
}
