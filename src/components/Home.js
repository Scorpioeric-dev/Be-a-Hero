import React, { Component } from 'react'
import styled from 'styled-components'

export default class Home extends Component {
    render() {
        return (
            <div>
            <Img src="https://www.donorcarenet.org/wp-content/uploads/2019/05/gifthero222.jpg" alt=''/>
            </div>
        )
    }
}

const Img = styled.img`
  height: 100vh;
  width: 100vw;
  margin:none;
  `

