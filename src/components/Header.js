import React, { Component } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setUser, CANCEL } from "../Ducks/reducer";
import store from "../Ducks/store";
import axios from "axios";
import swal from "sweetalert2";

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };

  // login = async () => {
  //   const { password, email } = this.state;
  //   const res = await axios.post("/auth/login", { email, password });
  //   if (res.data.user) {
  //     this.props.setUser(res.data.user);
  //   }
  //   swal.fire(res.data.message);
  
  // };
  // cancel = () => {
  //   store.dispatch({
  //     type: CANCEL
  //   });
  // };

  // logout = async () => {
  //   const res = await axios.delete('/auth/logout')
  //   this.props.setUser(null)
  //   swal.fire(res.data.message)
  // }

  render() {
    return (
      <Main>
        <div className="heart-container">
          <div className="heart"></div>
        </div>
        <Link to="/landing">
          <span>Donate</span>
        </Link>
        <Link to="/Auth">
          <div>
            <span>Register</span>
          </div>
        </Link>
        <Link to="/Login">
          <span>Login</span>
        </Link>
        <Link to="/Categories">
          <span>Categories</span>
        </Link>
    
        
         
        
      </Main>
    );
  }
}
export default connect(
  null,
  { setUser }
)(withRouter(Header));

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

//