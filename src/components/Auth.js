import React, { Component } from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { setUser, CANCEL } from "../Ducks/reducer";
import store from "../Ducks/store";
import swal from "sweetalert2";
import styled from "styled-components";

export class Auth extends Component {
  constructor() {
    super();
    this.state = {
      user_name: "",
      email: "",
      gender: "",
      password: "",
      blood_type:'',
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

  registerUser = async () => {
    const { user_name, email, gender, password,blood_type } = this.state;

    const res = await axios.post("/auth/register", {
      user_name,
      email,
      gender,
      password,
      blood_type
    });
    if (res.data.user) {
      this.props.setUser(res.data.user);
    }

    swal.fire({ type: "success", text: res.data.message });
    // let result = await res.data;
    if (res.data.message === "Email already in use") {
      swal.fire({ type: "error", text: res.data.message });
    } else {
      return this.props.history.push("/");
    }
    this.toggleEdit();
    console.log(res.data);
  };

  cancel = () => {
    store.dispatch({
      type: CANCEL
    });
  };
  //try to create a dropdown for the register
  render() {
    return (
      <div>
        <Img
          src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt=""
        />
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
          <input 
          placeholder='bloodtype'
          type='text'
          value={this.state.blood_type}
          onChange={e => this.handleChange(e,'blood_type')} 
          />

          <Button onClick={this.registerUser}>Register</Button>

          <Link to="/">
            <Button onClick={this.cancel}>Cancel</Button>
          </Link>
        </div>
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
  border: solid white;
  justify-content: center;
  font-size: 1rem;
  width: 7vw;
  display: flex;
  align-items: center;
  float: left;
`;
const Img = styled.img`
  height: 100vh;
  width: 100vw;
  margin: none;
`;
