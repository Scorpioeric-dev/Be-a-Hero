import React, { Component } from 'react'
import Room from './Room'

export default class Message extends Component {
    state = {
        rooms:[],
        roomName:''
    }
    
    joinRoom = () => {
        const roomsArr = this.state.rooms.slice()
        roomsArr.push(this.state.roomName)
        this.setState({
          roomName: '',
          rooms: roomsArr
        })
      }
    
      handleInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    
      render() {
        const rooms = this.state.rooms.map(room => <Room room={room} />)
        return (
          <div className="App">
          <h2>Join Room</h2>
            <div className="room-joiner">
              <input type="text" name="roomName" onChange={this.handleInput} />
              <button onClick={this.joinRoom}>Join Room</button>
            </div>
            <div className="room-list">
              <Room room="S.A.L" />
              {rooms}
            </div>
          </div>
        )
      }
    }
    

   