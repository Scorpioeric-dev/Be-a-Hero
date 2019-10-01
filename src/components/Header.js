import React, { Component } from 'react'
import styled from 'styled-components'
import {Link } from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <Main >
            
            <HeartC>
           
            <Heart>
            </Heart>
            <h1>Vida</h1>
            </HeartC>
            <Link to="/landing">
            <div>
            <span>Register</span>
            </div>
            </Link>
            
            
            
              
            </Main>
        )
    }
}

const Main = styled.div`

    display:flex;
    justify-content:space-between;
    align-items: center;
    padding:0 1rem;
    max-width:1000px;
    margin:0 auto;
    background:linear-gradient(to right,white,red,pink); 
  
  `
  const HeartC = styled.div`
  padding:10px;
  content: '';
  position: relative;
  top:15px;
  right:80px;
  background-color: #ac0000;
  height: 100px;
  width: 100px;
  border-radius: 50%;`

  const Heart = styled.div`
  background: #ac0000;
  height: 100px;
  width: 100px;
  transform: rotate(45deg);
  animation: heartbeat .7s infinite;
  `

 