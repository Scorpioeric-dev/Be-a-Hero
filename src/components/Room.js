import React, { Component } from "react";
import { connect } from "react-redux";
import io from "socket.io-client";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Room.css";

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: "",
      username: "",
      usernameSet: false,

      room: "connect"
    };
    this.socket = io.connect(":4400");
    this.socket.on("global response", data => this.updateMessages(data));
    this.socket.on("room response", data => this.updateMessages(data));
  }

  componentDidMount = () => {
    this.socket.emit("join chat", { room: this.state.room });
  };

  // getMessages = () => {
  //     //need to figure out the actual param I want to set example donor/donne?
  //     const {} = this.props.match.params
  //     axios.get(`/api/messages/${}`).then(res => {
  //         this.setState({
  //             messages: res.data
  //         })
  //     })
  // }

  blast = () => {
    this.socket.emit(`blast to room socket`, {
      message: this.state.message,
      username: this.state.username,

      room: this.state.room
    });
  };

  handlechange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  updateMessages = data => {
    this.setState({
      messages: [
        ...this.state.messages,
        {
          message: data.message,
          user_name: data.user_name,
          profile_pic: data.profile_pic
        }
      ]
    });
    this.setState({
      message: ""
    });
  };

  render() {
    const messages = this.state.messages.map((message, i) => (
      <div
        key={i}
        className={
          message.username === this.state.username ? "my-message" : "message"
        }
      >
        <h5>{message.username}</h5>
        <p>{message.message}</p>
      </div>
    ));
    return (
      <div className="chatInput">
      {messages}
        <input
          type="text"
          onChange={e => this.handlechange(e)}
          name="message"
          value={this.state.message}
          placeholder="type here "
        />
        <button onClick={() => this.blast()}>send</button>
      </div>
    );
  }
}
