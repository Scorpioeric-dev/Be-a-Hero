import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {Link} from 'react-router-dom'

import { setUser } from "../Ducks/reducer";

export class DonorProfile extends Component {
  render() {
    return (
      <div className="donor">
        {!this.props.editing ? (
          <Flex>
            <div className="img">
              <div className="profile">
                <Img src={this.props.ele.profile_pic} alt="" />
              </div>
            </div>
            <div className="text">
              <h3>Status: {this.props.ele.title}</h3>
              <h3>Blood Type: {this.props.ele.blood_type}</h3>
              <Link to="/Message">
                <Button>Chat</Button>
              </Link>
              {this.props.ele.user_id === this.props.user_id ? (
                <Button onClick={this.props.edit}>Edit</Button>
              ) : null}
            </div>
          </Flex>
        ) : (
          <Container>
            <input
              className="ainput"
              type="text"
              name="title"
              onChange={this.props.handle}
              placeholder=" title"
              defaultvalue={this.props.title}
            />

            <input
              className="ainput"
              type="text"
              name="blood_type"
              onChange={this.props.handle}
              placeholder=" Blood"
              defaultvalue={this.props.blood_type}
            />
            <input
              className="ainput"
              type="text"
              name="profile_pic"
              onChange={this.props.handle}
              placeholder="Profile"
              defaultvalue={this.props.profile_pic}
            />

            <Button onClick={() => this.props.update(this.props.donor_id)}>
              save
            </Button>
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
  background-size: cover;
  width: 100%;
  height: 100%;
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
  height: 15vh;
border-radius:10px;
  margin-top: 60px;
  border: solid black;
`;
const Button = styled.div`
display:flex;
justify-content:space-between;
  color: rgb(95, 210, 255); font-size: 9px; line-height: 9px; padding: 3px; border-radius: 5px; font-family: Georgia, serif; font-weight: normal; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none; background-image: linear-gradient(to right, rgb(28, 110, 164) 0%, rgb(35, 136, 203) 50%, rgb(20, 78, 117) 100%); box-shadow: rgb(0, 0, 0) 3px 3px 10px 3px; border: 2px solid rgb(28, 110, 164); display: inline-block;}
  .myButton:hover 
  background: #1C6EA4; 
  .myButton:active 
position:relative;
  margin-bottom:10px;
  align-items:flex-end;
  `;
