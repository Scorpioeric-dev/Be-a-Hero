import React, { Component } from "react";
import styled from "styled-components";
import { CANCEL } from "../Ducks/reducer";
import store from "../Ducks/store";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";

export class Categories extends Component {
  cancel = () => {
    store.dispatch({
      type: CANCEL
    });
  };

  render() {
    //make these anchor tags to take them to listed item work on this when you have down time
    return (
      <div>
        <Img
          src="https://www.donorcarenet.org/wp-content/uploads/2019/05/gifthero222.jpg"
          alt=""
        />
        <Flex>
          <a href="https://www.donorcarenet.org/considering-kidney-donation/">
            <span>Kidney</span>
          </a>
          <a href="https://www.nhlbi.nih.gov/health-topics/blood-donation">
            <span>Blood</span>
          </a>
          <a href="https://www.wigsforkids.org/">
            <span>Hair</span>
          </a>
          <a href="https://www.mayoclinic.org/departments-centers/liver-transplant/sections/overview/ovc-20212010?mc_id=google&campaign=1675269332&geo=9029705&kw=%2Bliver%20%2Btransplant&ad=324804329680&network=g&sitetarget=&adgroup=67971556507&extension=&target=kwd-323283811193&matchtype=b&device=c&account=1733789621&invsrc=transplant&placementsite=enterprise&gclid=CjwKCAjwxOvsBRAjEiwAuY7L8jwwjwq3hGsgD_mfCqVVWUTobDrcrGGQvI76My_hlEPSfZEquvRqixoCBcoQAvD_BwE">
            <span>Liver</span>
          </a>
          <a href="https://www.dkms.org/en/register?source=Paid_Search&gclid=CjwKCAjwxOvsBRAjEiwAuY7L8rnI437vjWG7TNVMN6vlHuOoWdOjBMMcSccZ1_uLKO703NzSaroFshoCjZUQAvD_BwE">
            <span>Bone Marrow</span>
          </a>
          <a href="https://www.mayoclinic.org/tests-procedures/pancreas-transplant/about/pac-20384783">
            <span>Pancreas</span>
          </a>
          <Link to="/">
            <span onClick={this.cancel}>Home</span>
          </Link>
        </Flex>
      </div>
    );
  }
}
export default connect(null)(withRouter(Categories));

const Flex = styled.div`
  
 background:white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  justify-content: space-evenly;
  position: absolute;
  left: 1000px;
  top: 70px;
  height: 180px;
  border-radius: 10px;
  border:solid blue 2px;
  cusor:hover;
  a:visited{
    color:black;
  }
  a:hover{
    color:blue;
  }
  z-index:9999;
  margin-top:50px;
  font-bold:
`;
const Img = styled.img`
  height: 100vh;
  width: 100vw;
  margin: none;
`;
