import React, { Component } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setUser, CANCEL } from "../Ducks/reducer";
import store from "../Ducks/store";
import axios from "axios";
import swal from "sweetalert2";

export class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };

  login = async () => {
    const { password, email } = this.state;
    const res = await axios.post("/auth/login", { email, password });
    if (res.data.user) {
      this.props.setUser(res.data.user);
    }
    console.log(res.data.user);
    swal.fire({ type: "success", text: res.data.message });
    this.props.history.push("/");
  };
  cancel = () => {
    store.dispatch({
      type: CANCEL
    });
  };

  render() {
    return (
      <div>
        <Img
          src="https://cdn.memiah.co.uk/blog/wp-content/uploads/lifecoach-directory.org.uk/2018/04/Personal-development.png"
          alt=""
        />

        <Article>
          <input
            className="authinput"
            type="text"
            placeholder="Email"
            onChange={e => this.handleChange(e, "email")}
          />

          <input
            className="authinput"
            type="password"
            placeholder="Password"
            onChange={e => this.handleChange(e, "password")}
          />
          <div id="do">
            <Link>
              <Button onClick={this.login}>Login</Button>
            </Link>
          </div>
          <div id="do">
            <Link to="/">
              <Button onClick={this.cancel}>Cancel</Button>
            </Link>
          </div>
        </Article>
      </div>
    );
  }
}
export default connect(
  null,
  { setUser }
)(withRouter(Login));

const Article = styled.div`
  border: solid white 2px;
  background: #00000088;
  opacity: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  justify-content: space-evenly;
  position: absolute;
  left: 750px;
  top: 40px;
  height: 250px;
  margin-top: 120px;
  border-radius: 9px;
  #do a {
    text-decoration:none;
  
  }
  z-index: 1000;

  @media(max-width:450px){
    background: #00000088;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 225px;
  position: absolute;
  left: 80px;
  top: 80px;
  height: 280px;
  border-radius: 10px;
  border: solid white 1.5px;
  margin-top: 55px;
  }
`;
const Button = styled.div`
  border-radius: 8px;
  color: white;
  border: solid white 1px;
  font-size: 1rem;
  width: 6vw;
  display: flex;
  align-items: center;
  justify-content: center;
  a:visited {
    color: black;
  }
  a:hover {
    color: pink;
  }
  text-decoration: none;
  @media(max-width:450px){
    height:3vh;
    width:16vw;
    font-size:.8rem;
  }
`;
const Img = styled.img`
  height: 100vh;
  width: 100vw;
`;
