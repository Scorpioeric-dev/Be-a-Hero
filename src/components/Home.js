import React, { Component } from "react";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";
import Header from './Header'

export default class Home extends Component {
  render() {
    return (
      <div>
        
        <div className="image">
        <div>
        
        </div>
            <img
              src="https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
            <h2>
              <span className="spacer">Make A Difference Change a life</span>
            </h2>
          </div>
      
      </div>
    );
  }
}

const Img = styled.img`
  height: 100vh;
  width: 100vw;
  margin: none;
  clip-path: polygon(0 12%, 100% 12%, 100% 77%, 35% 100%, 0 100%);
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
