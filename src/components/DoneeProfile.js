import React, { Component } from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {setUser} from '../Ducks/reducer'

export  class DoneeProfile extends Component {
    render() {
        return (
            <div className='Donee'>
            {!this.props.editing ? (
                <Flex>
                  <div className="text">
                    <div>Title: {this.props.e.title}</div>
                    <h5>blood_type: {this.props.e.blood_type}</h5>
                    {this.props.e.user_id === this.props.user_id ? (
                        <button onClick={this.props.edit}>edit</button>
                        ) : null}
                        </div>
                       <div className='img'>
                       <Img src={this.props.e.profile_pic} alt="" />
                       </div> 
                  
                </Flex>
              ) : (
                <Container>
                  <input
                    type="text"
                    name="title"
                    onChange={this.props.handle}
                    placeholder="Edit title"
                    defaultvalue={this.props.title}
                  />
    
                  <input
                    type="text"
                    name="blood_type"
                    onChange={this.handleChange}
                    placeholder="Edit Blood"
                    defaultvalue={this.props.blood_type}
                  />
                  <input
                    type="text"
                    name="profile_pic"
                    onChange={this.handleChange}
                    placeholder="Edit profile"
                    defaultvalue={this.props.profile_pic}
                  />
    
                  <button onClick={() => this.props.update(this.props.donee_id)}>save</button>
                </Container>
              )}
            </div>
        )
    }
}
function mapStateToProps(reduxState) {
    const { user, user_id } = reduxState;
    return { user, user_id };
  }
  
  export default connect(
    mapStateToProps,
    { setUser }
  )(withRouter(DoneeProfile));
const Img = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: solid black;
  margin: 90px;
  position: relative;
  margin-left: 10px;
`;
const Flex = styled.div`
  display: flex;

  justify-content: space-between;
  width: 300px;

  margin-left: 15px;
  align-items: center;
  height: 30vh;
  flex-direction: flex-start;

  border: solid black;
  border-radius: 35px;
  font-size: 2rem;
`;

const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
  position: absolute;
  left: 100px
  height: 10vh;

  margin-top: 60px;
  border: solid black;
`;