import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <Main>
        <div className="heart-container">
          <div className="heart"></div>
        </div>

        <Link to="/landing">
          <div></div>
          <span>Donate</span>
        </Link>
        <Link to="/Auth">
          <div>
            <span>Register</span>
          </div>
        </Link>
        <Link to='/Auth'>
        <span>Login</span>
        </Link>
        <Link to="/Categories">
          <span>Categories</span>
        </Link>
      </Main>
    );
  }
}
const Main = styled.div`
    display:flex;
    justify-content:space-around;
    align-items: center;
    padding: 1rem;
    width:100vw;
    height:10vh
    margin:0 auto;
    border: dotted pink;
    color:black;
    `;
