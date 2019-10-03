import React, { Component } from 'react'
import styled from 'styled-components'

export default class Home extends Component {
    render() {
        return (
            <div>
            
            <Content>
            <img src="https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=''/>
            
            
            <Img src="https://www.donorcarenet.org/wp-content/uploads/2019/05/gifthero222.jpg" alt=''/>
            
            
            <img src='https://images.pexels.com/photos/1374360/pexels-photo-1374360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt="" />
            </Content>
            

           </div>
        )
    }
}

const Img = styled.img`
  height: 100vh;
  width: 100vw;
  margin:none;
  `
const Content = styled.div`
display:flex;
justify-content:center;
flex-direction:column;`


