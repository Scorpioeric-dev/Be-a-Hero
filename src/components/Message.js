import React, { Component } from 'react'
import Room from './Room'
import styled from 'styled-components'
import Twilio from './Twilio'


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
          <div className="room-list">
            <Room room="S.A.L" />
            {rooms}
            <div className='twilio'>
            <Twilio/>
            </div>
            
            </div>
          </div>
        )
      }
    }
    

    const Button = styled.div`

    color: rgb(95, 210, 255); font-size: 9px; line-height: 9px; padding: 3px; border-radius: 5px; font-family: Georgia, serif; font-weight: normal; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none; background-image: linear-gradient(to right, rgb(28, 110, 164) 0%, rgb(35, 136, 203) 50%, rgb(20, 78, 117) 100%); box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px; border: 2px solid rgb(28, 110, 164); display: inline-block;}
    .myButton:hover 
    background: #1C6EA4; 
    .myButton:active 
    background: #144E75;
    margin-top:10px;
    
    `;