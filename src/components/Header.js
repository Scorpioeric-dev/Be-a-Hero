import React, { Component } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../Ducks/reducer";
import axios from "axios";
import swal from "sweetalert2";
import Zoom from "react-reveal";
import logo from "./images/healing-heart_logo_pink.png";
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
    window.location.reload()
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
  render() {
    return (
      <Main>
        {!this.state.editing ? (
          <Main>
            <Zoom>
              <div id="do">
                <Link to="/Donate">
                  <span id="donate">Donate</span>
                </Link>
              </div>
              <span id="hamburger-menu" onClick={this.clickHamburger}>&#9776;</span>

              <div id="do">
                <Link to="/Auth">
                  <span className="menu-option" onClick={this.toggleEdit}>
                    Register
                  </span>
                </Link>
              </div>

              <div id="do">
                <Link to="/Login">
                  <span className="menu-option" onClick={this.toggleEdit}>
                    Login
                  </span>
                </Link>
              </div>
              <div id="do">
                <Link to="/Categories">
                  <span className="menu-option">Categories</span>
                </Link>
              </div>
            </Zoom>
          </Main>
        ) : (
          <Main>
            <div id="do">
              <Link to="/Categories">
                <span>Categories</span>
              </Link>
            </div>
            <div id="do">
              <Link to="/Donor">
                <span>Donor</span>
              </Link>
            </div>
            <div id="do">
              <Link to="/Donee">
                <span>Donee</span>
              </Link>
            </div>
            <div id="do">
              <Link to="/">
                <span onClick={this.logout}>Logout</span>
              </Link>
            </div>
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
    
    font-size:1.8rem;
    align-items: center;
    
    width:100vw;
    height:10vh
    margin-bottom:15px;
    color:white;
    
    position:fixed;
    z-index:10;
    
    
    #hamburger-menu{
      display:none;

    }

    #do a {
      text-decoration:none;
    
    }
    
    cursor:hover;
    a:visited{
      color:black;
    }
    a:hover{
      color:white;
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
   
    #hamburger-menu{
      display:flex;
      margin-left:100px;
      color:black;

      
    }

  
  
  
  
  
  
  
  
  
  
  
  
  
  cursor:hover;
  a:visited{
    color:black;
  }
  a:hover{
    color:white;
  }
  
  
}
`;

//
const Ham = styled.div`
  color: blue;
  display: none;

  @media (max-width: 450px) {
    color: white;
    display: flex;
    justify-content: flex-end;
  }
`;

//ssh-keygen

// ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDHTK0jOT0tEaYmm4ip2Udh3r32Ab7l0tJ17MJTtGlsmZsB04L1SDpDpCO2Iw0U7MSq8mZjujaWIvg7ey5Ky8bc85CatEj4mBCqZ3spPWM1Gq2KG9hGFAdM0LfsfW29k237mdXijslfhIuHyiHNh5WoathXU6Kk4e6zLrO48E3PM0oFoJieyAoKZuuY8enTHOqH/eDTfzp07iJFlVKkUofbfLb7bnAHcpt+S9ps5wJVLdRWqYDYATxJL3tRKAPDOBbYmu2dCvmssx4BzHdwygs/HhUefiJR2W33MXJCIyNpSRmO0g8aEU2ykCtnvzqPKfqEW/I7T5TOfWroGH6jqy/VeSmreieqhWDLGx9t7wQMjHnQp6x5VKAPRFzm6Xf5xMsswDNGF3zzfPZati6s0rH8SOhy/+4u2bbG2vo6kqJlGyfTp05jb3CKALBBY3CaM6CoKGK2wwRJkHxrK6C3xuM+Qd6JLbM028IPI86KDirgh2iDMc1Oqy1OwsVMeJK7560= Owner@DESKTOP-VM5EDL3