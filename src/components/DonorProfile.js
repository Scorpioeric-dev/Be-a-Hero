import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { setUser } from "../Ducks/reducer";

export class DonorProfile extends Component {
  render() {
    return (
      <div className="donor">
        {!this.props.editing ? (
    
          <Flex>
          
          <div className="img">
          <div className='profile'>
          <Img src={this.props.ele.profile_pic} alt="" />
          </div>
          </div>
          <div className="text">
          <h3>Status: {this.props.ele.title}</h3>
          <h3>Blood Type: {this.props.ele.blood_type}</h3>
          
          {this.props.ele.user_id === this.props.user_id ? (
          <button onClick={this.props.edit}>Edit</button>
          ) : null}
          </div>
          </Flex>
        ) : (
          <Container>
            <input
              type="text"
              name="title"
              onChange={this.props.handle}
              placeholder=" title"
              defaultvalue={this.props.title}
            />

            <input
              type="text"
              name="blood_type"
              onChange={this.props.handle}
              placeholder=" Blood"
              defaultvalue={this.props.blood_type}
            />
            <input
              type="text"
              name="profile_pic"
              onChange={this.props.handle}
              placeholder="Profile"
              defaultvalue={this.props.profile_pic}
            />

            <button onClick={() => this.props.update(this.props.donor_id)}>
              save
            </button>
          </Container>
        )}
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  const { user, user_id } = reduxState;
  return { user, user_id };
}

export default connect(
  mapStateToProps,
  { setUser }
)(withRouter(DonorProfile));
const Img = styled.img`
backgound-size:cover;
width:100%;
height:100%;
  border-radius: 50%;
 border: solid black;
  
position: relative;


`;
const Flex = styled.div`
  display: flex;

  justify-content: space-between;
  width: 300px;

  margin-left: 15px;
  align-items: center;
  height: 400px;
  flex-direction: column;

  border: solid black;
  border-radius: 25px;
  font-size: 1rem;
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
