import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUser } from "../Ducks/reducer";
import {Link} from 'react-router-dom'

export class DoneeProfile extends Component {
  render() {
    return (
      <div className="Donee">
        {!this.props.editing ? (
          <Flex>
            <div className="img">
              <div className="profile">
                <Img src={this.props.e.profile_pic} alt="" />
              </div>
            </div>
            <div className="text">
              <div>Status: {this.props.e.title}</div>
              <h5>Bloodtype: {this.props.e.blood_type}</h5>
              <Link to="/Message">
                <Button>Chat</Button>
              </Link>
              {this.props.e.user_id === this.props.user_id ? (
                <Button onClick={this.props.edit}>edit</Button>
              ) : null}
            </div>
          </Flex>
        ) : (
          <Container>
            <input className='input1'
              type="text"
              name="title"
              onChange={this.props.handle}
              placeholder=" title"
              defaultvalue={this.props.title}
            />

            <input className='input1'
              type="text"
              name="blood_type"
              onChange={this.props.handle}
              placeholder="Blood"
              defaultvalue={this.props.blood_type}
            />
            <input className='input1'
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
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: solid black;
  position: relative;
  transition:transform .2s;
  margin-bottom:10px;

  :hover{
    transform: scale(1.2);

  }
  postion:relative;

@media(max-width:450px){
  background-size: cover;
  width: 50%;
  height: 50%;
  border-radius: 50%;
  border: solid black;
  position: relative;
  transition:transform .2s;

  :hover{
    transform: scale(1.5);

  }
  postion:relative;
}




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

  @media(max-width:450px){
    background-color:rgb(204,162,162)
    display: flex;

  justify-content: space-between;
  width: 150px;

  margin-left: 15px;
  align-items: center;
  height: 200px;
  flex-direction: column;

  border: solid black;
  border-radius: 25px;
  font-size: 2rem;
  }
  
`;

const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
  position: absolute;
  left: 100px
  height: 30vh;
border-radius:10px;
  margin-top: 80px;
  border: solid black;
 
  @media(max-width:450px){
    display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100px;
  position: absolute;
  left: 100px
  height: 15vh;
border-radius:10px;
  margin-top: 80px;
  border: solid black;
  }
`;

const Button = styled.button`
display:flex;
justify-content:space-between;
  color: rgb(95, 210, 255); font-size: 9px; line-height: 9px; padding: 3px; border-radius: 5px; font-family: Georgia, serif; font-weight: normal; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none; background-image: linear-gradient(to right, rgb(28, 110, 164) 0%, rgb(35, 136, 203) 50%, rgb(20, 78, 117) 100%); border: 2px solid rgb(28, 110, 164); display: inline-block;}
  .myButton:hover 
  background: #1C6EA4; 
  .myButton:active 
  background: #144E75;
  margin-bottom:10px;
  align-items:flex-end;
  cursor:pointer;

  @media(max-width:450px){
    display:flex;
justify-content:space-between;
  color: rgb(95, 210, 255); font-size: 9px; line-height: 9px; padding: 3px; border-radius: 5px; font-family: Georgia, serif; font-weight: normal; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none; background-image: linear-gradient(to right, rgb(28, 110, 164) 0%, rgb(35, 136, 203) 50%, rgb(20, 78, 117) 100%); border: 2px solid rgb(28, 110, 164); display: inline-block;}
  .myButton:hover 
  background: #1C6EA4; 
  .myButton:active 
  background: #144E75;
  margin-bottom:5px;
  cursor:pointer;
  }
  `;
