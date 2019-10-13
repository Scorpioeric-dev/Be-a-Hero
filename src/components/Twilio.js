import React, { Component } from 'react'
import axios from 'axios'

export default class Twilio extends Component {
    state ={
        text:{
            recipient:'',
            textmessage:'Hola Mundo'
        }
    }

    sendtext = () => {
        const {text} = this.state
        //pass texts GET variables via query string
        axios.get(`/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`)
    }
    render() {
        return (
            <div>
                <button onClick={this.sendtext}></button>
            </div>
        )
    }
}
