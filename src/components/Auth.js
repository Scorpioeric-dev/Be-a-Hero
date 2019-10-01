import React, { Component } from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { setUser, CANCEL } from "../Ducks/reducer";
import store from "../Ducks/store";
import swal from 'sweetalert2'
import styled from 'styled-components'

export class Auth extends Component {
  constructor() {
    super();
    this.state = {
      user_name: "",
      email: "",
      gender: "",
      password: ""
    };
  }
  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };
  registerUser = () => {
    const { user_name, email, gender, password } = this.state;
    axios
      .post("/auth/register", { user_name, email, gender, password })
      .then(res => {
        // this.setState({
        //   user_name: res.data[0],
        //   email: res.data[0],
        //   gender: res.data[0]
        // });

        this.props.setUser({user_name,email,gender});
        console.log(this.props)
        // res.data[0].user_name,
        // res.data[0].email,
        // res.data[0].gender,
        // res.data[0].id

        swal.fire({ type: "Success", text: res.data.message });
        this.props.history.push("/Landing");
      });
  };

  cancel = () => {
    store.dispatch({
      type: CANCEL
    });
  };

  render() {
    return (
      <div className="auth">
        <input
          placeholder="username"
          type="text"
          value={this.state.user_name}
          onChange={e => this.handleChange(e, "user_name")}
        />
        <input
          placeholder="email"
          type="text"
          value={this.state.email}
          onChange={e => this.handleChange(e, "email")}
        />
        <input
          placeholder="gender"
          type="text"
          value={this.state.gender}
          onChange={e => this.handleChange(e, "gender")}
        />
        <input
          placeholder="password"
          type="password"
          value={this.state.password}
          onChange={e => this.handleChange(e, "password")}
        />
        <Link to="/Landing">
          <Button onClick={this.registerUser}>Register</Button>
        </Link>
        <Link to="/">
          <Button onClick={this.cancel}>Cancel</Button>
        </Link>
      </div>
    );
  }
}

export default connect(
  null,
  { setUser }
)(withRouter(Auth));

const Button = styled.div`
  border-radius: 8px;
  color: white;
  background-color: pink;
 
  font-size: 1rem;
  width: 5vw;
  display: flex;
  align-items: center;
`;
