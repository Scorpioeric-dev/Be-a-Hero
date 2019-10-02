import React, { Component } from "react";
import Donor from "./Donor";
import Donee from "./Donee";
import Categories from "./Categories";
import { Switch, Route } from "react-router-dom";
import styled from 'styled-components'

export default class Landing extends Component {
  render() {
    return (
      <div>
    
      <Img src="https://www.donorcarenet.org/wp-content/uploads/2019/05/gifthero222.jpg" alt=''/>
        
        
        <Switch>
          <Route path='/Donor' component={Donor} />
          <Route path='/Donee' component={Donee} />
          <Route path='/Categories' component={Categories} />
        </Switch>
      </div>
    );
  }
}
const Img = styled.img`
  height: 100vh;
  width: 100vw;
  margin:none;
  

   

 
`
