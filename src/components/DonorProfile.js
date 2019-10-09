import React, { Component } from "react";
import styled from 'styled-components'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import { setUser } from "../Ducks/reducer";

export class DonorProfile extends Component {
   
  render() {
    return (
      <div className="donor">
        {!this.props.editing ? (
          <Flex>
            <div className="text">
              <h4>Title: {this.props.ele.title}</h4>
              <h4>BloodType: {this.props.ele.blood_type}</h4>

              {this.props.ele.user_id === this.props.user_id ? (
                <button onClick={this.props.edit}>Edit</button>
              ) : null}
            </div>
           

            <div className="img">
              <Img src={this.props.ele.profile_pic} alt="" />
            </div>
          </Flex>
        ) : (
          <Container>
            <input
              type="text"
              name="title"
              onChange={this.props.handle}
              placeholder=" title"
              defaultValue={this.props.title}
            />

            <input
              type="text"
              name="blood_type"
              onChange={this.props.handle}
              placeholder=" Blood"
              defaultValue={this.props.blood_type}
            />
            <input
              type="text"
              name="profile_pic"
              onChange={this.props.handle}
              placeholder="Profile"
              defaultValue={this.props.profile_pic}
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
