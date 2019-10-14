import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Landing from "./components/Landing";
import Categories from './components/Categories'
import Login from './components/Login'
import Donee from './components/Donee'
import Donor from './components/Donor'

import Donate from  './components/Donate'
import Message from './components/Message'

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Auth" component={Auth} />
    <Route path="/Landing" component={Landing} />
    <Route path="/Categories" component={Categories} />
    <Route path='/Login' component={Login}/>
    <Route path='/Donee' component={Donee}/>
    <Route path='/Donor' component={Donor}/>
  
    <Route path='/Donate' component={Donate}/>
    <Route path='/Message' component={Message}/>
  </Switch>
);
