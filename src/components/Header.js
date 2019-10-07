import React, { Component } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../Ducks/reducer";
import axios from "axios";
import swal from "sweetalert2";


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
    this.props.setUser(null);
    swal.fire(res.data.message);
  };

  render() {
    return (
    
      <Main>
        
    
        
          {!this.state.editing ? (
            <Main>
              <Link to="/landing">
                <span>Donate</span>
              </Link>

              <div>
                <Link to="/Auth">
                  <span onClick={this.toggleEdit}>Register</span>
                </Link>
              </div>

              <Link to="/Login">
                <span>Login</span>
              </Link>
              <Link to="/Categories">
                <span>Categories</span>
              </Link>
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
    background: #00000088;
    display:flex;
    justify-content:space-around;

    align-items: center;
     font:bold 24px/45px sans-serif;
    width:100vw;
    height:10vh
    margin-bottom:15px;
    cursor:hover;
    color:white;
    opacity: 0.5;
    position:fixed;
  
      

    
    a:visited{
      color:white;
    }
    a:hover{
      color:pink;
    }
    
    `;

//
