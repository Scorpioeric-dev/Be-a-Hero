import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUser } from "../Ducks/reducer";

export class DoneeProfile extends Component {
  render() {
    return (
      <div className="Donee">
        {!this.props.editing ? (
          <Flex>
          <div className="img">
          <div className='profile'>
          <Img src={this.props.e.profile_pic} alt="" />
          </div>
          </div>
          <div className="text">
            <div>Status: {this.props.e.title}</div>
            <h5>Bloodtype: {this.props.e.blood_type}</h5>
            {this.props.e.user_id === this.props.user_id ? (
              <Button onClick={this.props.edit}>edit</Button>
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
              placeholder="Blood"
              defaultvalue={this.props.blood_type}
            />
            <input
              type="text"
              name="profile_pic"
              onChange={this.props.handle}
              placeholder="profile"
              defaultvalue={this.props.profile_pic}
            />

            <Button onClick={() => this.props.update(this.props.donee_id)}>
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
)(withRouter(DoneeProfile));
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

const Button = styled.div`

  color: rgb(95, 210, 255); font-size: 9px; line-height: 9px; padding: 3px; border-radius: 5px; font-family: Georgia, serif; font-weight: normal; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none; background-image: linear-gradient(to right, rgb(28, 110, 164) 0%, rgb(35, 136, 203) 50%, rgb(20, 78, 117) 100%); box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px; border: 2px solid rgb(28, 110, 164); display: inline-block;}
  .myButton:hover 
  background: #1C6EA4; 
  .myButton:active 
  background: #144E75;
  margin-top:10px;
  `
