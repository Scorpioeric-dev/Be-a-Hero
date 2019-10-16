import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
require('dotenv/config')
const {_twilio_recipient} = process.env




//add number to recipient for demo purposes
export default class Twilio extends Component {
    state ={
        text:{
            recipient:_twilio_recipient,
            textmessage:'Start Process'
        }
    }

    sendtext = () => {
        const {text} = this.state
        //pass texts GET variables via query string
        axios.get(`/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`)
    }
    render() {
        return (
            <div className='twilio-button'>
               <Button onClick={this.sendtext}>Text a Doctor</Button> 
            </div>
        )
    }
}
const Button = styled.div`

  color: white; font-size: 12px; line-height: 9px; padding: 5px; border-radius: 3px; font-family: Georgia, serif; font-weight: normal; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none; background-image: linear-gradient(to right, rgb(28, 110, 164) 0%, rgb(35, 136, 203) 50%, rgb(20, 78, 117) 100%); border: 2px solid rgb(28, 110, 164); display: inline-block;}
  .myButton:hover 
  background: #1C6EA4; 
  .myButton:active 
  background: #144E75;
  margin-top:10px;
  :hover{
    background-color:#1C6EA4;
    cursor:pointer;
  }

  `;