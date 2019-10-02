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

          <span>Blood</span>
          <span>Hair</span>
          <span>Liver</span>
          <span>Bone Marrow</span>
          <span>Pancreas</span>
          <Link to="/Landing">
            <span onClick={this.cancel}>Home</span>
          </Link>
        </Flex>
      </div>
    );
  }
}
export default connect(null)(withRouter(Categories));

const Flex = styled.div`
  background: pink;
  color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  justify-content: space-evenly;
  position: absolute;
  left: 1000px;
  top: 60px;
  height: 180px;
  border-radius: 30px;
`;
const Img = styled.img`
  height: 100vh;
  width: 100vw;
  margin:none;`
  