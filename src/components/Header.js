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
    })
  }

  logout = async () => {
    const res = await axios.delete("/auth/logout");
    this.props.setUser(null);
    swal.fire(res.data.message);
  };

  render() {
    return (
      <Main>
        <div className="heart-container">
          <div className="heart"></div>
        </div>
        {!this.state.editing ? (
          <Main>
            <Link to="/landing">
              <span>Donate</span>
            </Link>
            <Link to="/Auth">
              <div>
                <span onClick={this.toggleEdit}>Register</span>
              </div>
            </Link>
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
    display:flex;
    justify-content:space-around;
    align-items: center;
    padding: 1rem;
    width:100vw;
    height:10vh
    margin:9px;
    
    color:black;
    position:fixed;
    `;

//
