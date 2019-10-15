import React, { Component } from "react";
import { connect } from "react-redux";
import io from "socket.io-client";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Room.scss";
import PropTypes from "prop-types";
import styled from "styled-components";

export class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: "",
      profile_pic: "https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      usernameSet: false,

      rooms: [],
      roomName: ""
    };
    //connecting to server
    this.socket = io.connect({secure: true});
    //functions being invoked within sockets
    this.socket.on("global response", data => this.updateMessages(data));
    this.socket.on("room response", data => this.updateMessages(data));
  }

  componentDidMount = () => {
    if (this.props.room !== "global") {
      this.socket.emit("join chat", { room: this.state.room });
    }
    this.getDoneeById()
    // if(this.state.profile_pic !== ''){

    // }
    // this.getDonorById()
  };

getDoneeById = () => {
axios.get(`/api/doneeById`).then(res => {
  console.log(res.data.profile_pic)
  this.setState({
    profile_pic:res.data.profile_pic
  })
})
}

getDonorById = () => {
  
  axios.get(`/api/donorById`).then(res => {
    console.log(res.data.profile_pic)
    this.setState({
      profile_pic:res.data.profile_pic
    })
  })
  }

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
    const roomsArr = this.state.rooms.slice();
    roomsArr.push(this.state.roomName);
    this.setState({
      roomName: "",
      rooms: roomsArr
    });
  };

  // emit = () => {
  //   this.socket.emit(
  //     `emit to ${this.props.room !== "global" ? "room" : "global"}socket`,
  //     {
  //       message: this.state.message,

  //       user_name: this.props.reduxState.user_name,
  //       profile_pic: this.props.reduxState.profile_pic,
  //       room: this.props.room
  //     }
  //   );
  // };

  blast = () => {
    this.socket.emit(`blast to room socket`, {
      messagez: this.state.message,

      user_name: this.props.reduxState.user_name,
      // profile_pic: this.props.reduxState.profile_pic,
      profile_pic: this.state.profile_pic,
      title: this.props.reduxState.title,
      room: this.state.room
    });
  };

  handlechange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  setuserName = () => {
    if (this.props.reduxState.user_name) {
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
          user_name: data.user_name,
          profile_pic:data.profile_pic,
          title: data.title
        }
      ]
    });
    this.setState({
      message: ""
    });
  };

  render() {
    console.log(this.props);

    console.log(this.state.messages);
    const messages = this.state.messages.map((message, i) => (
      <div
      // className={
      //   message.user_name === this.props.reduxState.user_name
      //   ? "user"
      //   : "non-user"
      // }
      // key={i}
      >
        <h5> {message.user_name}</h5>
        <img src={this.state.profile_pic} alt="myUser"/>
        <h5
          className={
            message.user_name === this.props.reduxState.user_name
              ? "user"
              : "non-user"
          }
          key={i}
        >
          {" "}
          {message.message}
        </h5>
      </div>
    ));
    return (
      <div className="left-chat-bubble-wrap">
        <h5 className="room-text">Room: {this.props.room}</h5>
        <div class="left-chat-bubble">{messages}</div>
        <div className="inputs">
          <input
            className="input"
            type="text"
            onChange={this.handlechange}
            name="message"
            value={this.state.message}
            placeholder="type here "
          />
          
          <Button onClick={this.blast}>send</Button>
          <div>
            <Link to="/Donate">
              <span>Donate Today</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return { reduxState };
}

export default connect(
  mapStateToProps,
  {}
)(Room);

Room.propTypes = {
  room: PropTypes.string
};

const Button = styled.div`

  color: white; font-size: 12px; line-height: 9px; padding: 6px; border-radius: 3px; font-family: Georgia, serif; font-weight: normal; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none; background-image: linear-gradient(to right, rgb(28, 110, 164) 0%, rgb(35, 136, 203) 50%, rgb(20, 78, 117) 100%);  border: 2px solid rgb(28, 110, 164); display: inline-block;}
  .myButton:hover 
  background: #1C6EA4; 
  .myButton:active 
  background: #144E75;
  margin-top:10px;
  margin-left:5px;
:hover{
  background-color:#1C6EA4;
  cursor:pointer;
  @media(max-width:450px){
    height:3vh;
    width:16vw;
    font-size:.8rem;
  }
}
  `;
