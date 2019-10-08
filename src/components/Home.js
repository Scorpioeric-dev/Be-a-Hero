import React, { Component } from "react";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";
import Header from "./Header";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="About">
          <div className="about-pics">
        
            <img
              className="one"
              src="https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="inspiration"
            />
            <img
              className="two"
              src="https://images.unsplash.com/photo-1513477967668-2aaf11838bd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="inspiration"
            />
            <img
              className="three"
              src="https://images.unsplash.com/photo-1559225306-3f60aa7b39a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
              alt="inspiration"
            />
          </div>
        </div>
      </div>
    );
  }
}

// const Img = styled.img`
//   height: 100vh;
//   width: 100vw;
//   margin: none;
//   clip-path: polygon(0 12%, 100% 12%, 100% 77%, 35% 100%, 0 100%);
// `;
// const Content = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
// `;
