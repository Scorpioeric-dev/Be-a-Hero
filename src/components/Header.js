import React, { Component } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../Ducks/reducer";
import axios from "axios";
import swal from "sweetalert2";
import Zoom from 'react-reveal'
import logo from './images/healing-heart_logo_pink.png'
export class Header extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      editing: false
    };
  }

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };

  toggleEdit = () => {
    this.setState({
      editing: !this.state.editing
    });
  };

  logout = async () => {
    const res = await axios.delete("/auth/logout");
    this.props.history.push("/");
    swal.fire({ type: "success", text: res.data.message });
    // window.location.reload()
  };

  clickHamburger() {
    const dropdown = document.getElementById("dropdown");
    console.dir(dropdown);
    if (dropdown.classList.contains("hide")) {
      dropdown.classList.remove("hide");
    } else {
      dropdown.classList.add("hide");
    }
  }
  // <span id='donate'>&#9776;</span> hamburger display for iphone
  render() {
    return (
      <Main>
      {!this.state.editing ? (
        <Main>
        <Zoom>
        <Link to="/Donate">
        <div id='do'>
        <span id="donate">Donate</span>
        
        </div>
        </Link>
        
        <div>
        <Link to="/Auth">
        <span className="menu-option" onClick={this.toggleEdit}>
        Register
        </span>
        </Link>
        </div>
        
        <Link to="/Login">
        <span className="menu-option" onClick={this.toggleEdit}>
        Login
        </span>
        </Link>
        <Link to="/Categories">
        <span className="menu-option">Categories</span>
        </Link>
       
        </Zoom>
        </Main>
        ) : (
          <Main>
            <Link to="/Categories">
              <span>Categories</span>
            </Link>
            <Link to="/Donor">
              <span>donor</span>
            </Link>
            <Link to="/Donee">
              <span>donee</span>
            </Link>

            <Link to="/">
              <span onClick={this.logout}>logout</span>
            </Link>
           
          </Main>
        )}
      </Main>
    );
  }
}
export default connect(
  null,
  { setUser }
)(withRouter(Header));

const Main = styled.div`
background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
    color:white;
    display:flex;
    justify-content:space-around;
    
    
    align-items: center;
     font:bold 24px/45px sans-serif;
    width:100vw;
    height:10vh
    margin-bottom:15px;
    color:white;
    
    position:fixed;
    z-index:10;
    
    
    
    
    cursor:hover;
    a:visited{
      color:blue;
    }
    a:hover{
      color:black;
    }

   
    @media (max-width:450px){
      linear-gradient(red 10%, 30%, blue 90%);
      color:blue;
      display:flex;
      
      justify-content:flex-start;
      
  
   .menu-option{
     display:none;
   }
  
   #donate{
     display:flex; 
     font-size:2.0rem; 
     font-family:cursive;
     margin-left:80px;
     text-decoration:none;
    } 
   
  #do{
    display:flex;
    justify-content:space-around;
    text-decoration:none;
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  cursor:hover;
  a:visited{
    color:white;
  }
  a:hover{
    color:black;
  }
  
  
}
`;

//
const Ham = styled.div`
  color:blue;
  display:none;


  @media(max-width:450px){
    color:white;
  display:flex; 
  justify-content:flex-end;
  }
`


