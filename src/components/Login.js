import React, { Component } from 'react'
import styled from 'styled-components'
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {setUser,CANCEL} from '../Ducks/reducer'
import store from '../Ducks/store'
import axios from 'axios'
import swal from 'sweetalert2'

export  class Login extends Component {
  state = {
    email:'',
    password:''
  }
  
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
    console.log(res.data.user)
    swal.fire(res.data.message);
    
  };
  cancel = () => {
    store.dispatch({
      type: CANCEL
    });
  };
  
  render() {
    return (
      <div>
      <Img src='https://cdn.memiah.co.uk/blog/wp-content/uploads/lifecoach-directory.org.uk/2018/04/Personal-development.png' alt=''/>
     
      <Article>
      
      <input
      type="text"
      placeholder="Email"
      onChange={e => this.handleChange(e, "email")}
      />
      
      <input
      type="password"
      placeholder="Password"
      onChange={e => this.handleChange(e, "password")}
      />
         <Link>
         <Button onClick={this.login}>Login</Button>
         </Link>
         
         <Link to='/'>
         <Button onClick={this.cancel}>Cancel</Button></Link>
         
         </Article>
         </div>
         )
        }
      }
      export default connect(
  null,
    { setUser }
  )(withRouter(Login));

const Article = styled.div`
   border:solid white;
   background:#00000088 ;
   opacity:5px;
  color: white;
 display: flex;
 flex-direction: column;
    align-items: center;
  width: 200px;
   justify-content: space-evenly;
  position:absolute
  ;
   left: 650px;
  top: 40px;
  height: 180px;
  border-radius:20px;
  margin-top:35px;
  z-index:1000;
 `;
 const Button = styled.div`
  border-radius: 8px;
  color: white;
  border:solid white;
  font-size: 1rem;
  width: 6vw;
  display: flex;
  align-items: center;
  justify-content:center;
  a:visited{
    color:black;
  }
  a:hover{
    color:pink;
  }

`;
const Img = styled.img`
  height: 100vh;
  width: 100vw;`

