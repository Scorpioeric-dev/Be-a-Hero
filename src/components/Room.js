import React, { Component } from "react";
import { connect } from "react-redux";
import io from "socket.io-client";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Room.css";
import PropTypes from "prop-types";

export  class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: "",
      username: "",
      usernameSet: false,

      room:[],
      roomName:''
    };
    //connecting to server
    this.socket = io.connect(":4400");
    //functions being invoked within sockets
    this.socket.on("global response", data => this.updateMessages(data));
    this.socket.on("room response", data => this.updateMessages(data));
  }

  componentDidMount = () => {
    if (this.props.room !== "global") {
      this.socket.emit("join chat", { room: this.state.room });
    }
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
  joinRoom = () => {
      const roomsArr = this.state.rooms.slice()
      roomsArr.push(this.state.roomName)
      this.setState({
          roomName:'',
          rooms:roomsArr
      })
  }

  emit = () => {
    this.socket.emit(
      `emit to ${this.props.room !== "global" ? "room" : "global"}socket`,
      {
        message: this.state.message,
        username: this.state.username,
        room: this.props.room
      }
    );
  };

  blast = () => {
    this.socket.emit(`blast to room socket`, {
      message: this.state.message,
      username: this.state.username,
      user_name: this.props.reduxState.user_name,
      profile_pic: this.props.reduxState.profile_pic,
      title:this.props.reduxState.title,
      room: this.state.room
    });
};

handlechange = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
};

setuserName = () => {
    if (this.state.username) {
        this.setState({
            usernameSet: true
        });
    }
    console.log("hit");
};

updateMessages = data => {
    this.setState({
        messages: [
            ...this.state.messages,
            {
                message: data.message,
                username: data.username
                //   profile_pic: data.profile_pic
            }
        ]
    });
    this.setState({
        message: ""
    });
};

render() {
    
    console.log('message')
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
        <h5>Room: {this.props.room}</h5>
        {messages}
        <div className="inputs">
          <input
            type="text"
            onChange={this.handlechange}
            name="message"
            value={this.state.message}
            placeholder="type here "
          />
          <button onClick={this.blast}>send</button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(reduxState){
    return{reduxState}
}


export default connect(mapStateToProps,{})(Room)

Room.propTypes = {
  room: PropTypes.string
};
