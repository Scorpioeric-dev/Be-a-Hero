// import React ,{Component} from 'react'
// import {connect} from 'react-redux'
// import io from 'socket.io-client'
// import axios from 'axios'
// import {Link } from 'react-router-dom'

// export class Room extends Component{
//     constructor(props){
//         super(props)
// this.state = {
//     messages: [],
//     message:'',
//     username:'',
//     usernameSet:false,
//     userTyping:false,
// room:'connect'
// }
// this.socket = io.connect({secure: true})
// this.socket.on('global response',data => this.updateMessages(data))
// this.socket.on('room response',data => this.updateMessages(data))
// }

// componentDidMount = () => {
//     this.socket.emit('join chat', {room:this.state.room})
// }

// getMessages = () => {
//     //need to figure out the actual param I want to set example donor/donne?
//     const {} = this.props.match.params
//     axios.get(`/api/messages/${}`).then(res => {
//         this.setState({
//             messages: res.data
//         })
//     })
// }

// blast = () => {
// this.socket.emit(
//     `blast to ${this.props.room !== 'global' ? 'room' : 'global'} socket`{
//         message:this.state.message,
//         user_name: this.props.reduxState.user_name,
//         profile_pic: this.props.reduxState.profile_pic,
//         room: this.state.room
//     }
// )
// }


// handlechange = e => {
//     this.setState({
//         [e.target.name]: e.target.value
//     })
// }

// updateMessages = data => {
//     this.setState({
//         messages: [...this.state.messages,{
//             message:data.message,
//             user_name:data.user_name,
//             profile_pic:data.profile_pic
//         }]
//     })
//     this.setState({
//         message:''
//     })
// }

// render(){
//     return(
//         const messages = this.state.messages.map((message,i) => (
//             <div className={
//                 message.user_name === this.props.reduxState.username
//                 ? 'user'
//                 : "non-user"

//             }
//             key={i}
//             >
//             <div>
//             <h5 className={
//                 message.user_name === this.props.reduxState.username 
//                 ? 'my-name'
//                 : 'name'

//             }
//             > {message.username}
            
//             </h5>
//             <img 
//             className={
//                 message.username = this.props.reduxState.username
//                 ? 'my-img'
//                 : 'img'
//             }
//             src={message.profile_pic}
//             alt='user' />
//             </div>
//             </div>
//         ))
//     )
// }



// }