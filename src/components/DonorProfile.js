import React, { Component } from 'react'

export default class DonorProfile extends Component {
    render() {
        return (
            <div className='Body'>
            <div className='donorprofile'>
            <h1>Title: {this.props.ele.title}</h1>
            <h1>BloodType: {this.props.ele.blood_type}</h1>
            <h1></h1> 
            <div>
            <Img src={this.props.ele.profile_pic} alt=''/>
            </div>
               
            
            
            </div>
                
            </div>
        )
    }
}
