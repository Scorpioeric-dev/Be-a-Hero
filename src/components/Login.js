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
   border:solid pink;
  color: pink;
 display: flex;
 flex-direction: column;
    align-items: center;
  width: 200px;
   justify-content: space-evenly;
  position:absolute
  ;
   left: 600px;
  top: 60px;
  height: 180px;
  border-radius:20px;
  margin-top:20px;
 `;
 const Button = styled.div`
  border-radius: 8px;
  color: pink;
  border:solid pink;
  font-size: 1rem;
  width: 6vw;
  display: flex;
  align-items: center;
  justify-content:center;

`;
const Img = styled.img`
  height: 100vh;
  width: 100vw;
  margin:none;`

