import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";
import store from "../Ducks/store";
import { CANCEL, setUser } from "../Ducks/reducer";
import { Link, withRouter } from "react-router-dom";
import DoneeProfile from "./DoneeProfile";

export class Donee extends Component {
  state = {
    donee_id: "",
    title: "",
    profile_pic: "",
    blood_type: "",
    lung_id: false,
    kidney_id: false,
    liver_id: false,
    pancreas_id: false,
    hair_id: false,
    user_id: 0,
    doneeData: [],
    id: 0,
    editing: false
  };

  componentDidMount() {
    this.getDoneeData();
    this.getDonorData();
  }

  createDonee = () => {
    const {
      title,
      profile_pic,
      blood_type,
      lung_id,
      kidney_id,
      liver_id,
      pancreas_id,
      hair_id
    } = this.state;

    // console.log(this.state);
    axios
      .post(`/api/donee`, {
        title,
        profile_pic,
        blood_type,
        lung_id,
        kidney_id,
        liver_id,
        pancreas_id,
        hair_id
      })
      .then(res => {
        this.setState({
          donee: res.data
        });

        this.getDoneeData();
      });
  };

  // componentDidUpdate(previousProps, previousState) {
  //   if (previousState.doneeData.length !== this.state.doneeData.length) {
  //     this.render();
  //   }
  // }

  getDonorData = () => {
    axios.get("/api/donorData").then(res => {
      console.log(res.data);
      this.setState({
        donorData: res.data
      });
    });
  };

  getDoneeData = () => {
    axios.get("/api/doneeData").then(res => {
      this.setState({
        doneeData: res.data
      });
      console.log("hit");
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    // console.log(this.state)
  };

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  };

  updateDonee = id => {
    const { title, profile_pic, blood_type } = this.state;
    console.log("hi", id);

    axios
      .put(`/api/editDonee/${id}`, {
        donee_id: id,
        title: title,
        profile_pic: profile_pic,
        blood_type: blood_type
      })
      .then(res => {
        this.setState({
          doneeData: res.data,
          editing: false
        });
        // console.log("hit2", res.data);
        this.toggleEdit();
        // this.getDoneeData();
        // window.location.reload();
      });
  };
  // delete = id => {
  //   axios.delete(`/api/donee/${id}`).then(res => {
  //     this.setState({
  //       doneeData:res.data
  //     })
  //   })
  // }

  cancel = () => {
    store.dispatch({
      type: CANCEL
    });
  };
  render() {
    console.log(this.state.doneeData);
    var mapped = this.state.doneeData
      .filter(ele => ele.blood_type === this.props.blood_type)
      .map(e => {
        return (
          <DoneeProfile
            key={e.id}
            e={e}
            edit={this.toggleEdit}
            update={() => this.updateDonee(e.donee_id)}
            handle={this.handleChange}
            editing={this.state.editing}
          />
        );
      });
    return (
      <div>
        <div className="navoffset"></div>
        <Section>
          <Input>
            <div className="create">
              <h3>Create A Profile</h3>
            </div>
            <div className="createinput">
              <input
                className="input1"
                onChange={this.handleChange}
                name="profile_pic"
                type="text"
                placeholder="Profile Picture"
                defaultvalue={this.state.profile_pic}
              />
              <input
                className="input1"
                name="title"
                type="text"
                placeholder="Donee-Donor"
                onChange={this.handleChange}
                defaultvalue={this.state.title}
              />
              <input
                className="input1"
                placeholder="Enter Bloodtype"
                type="text"
                defaultvalue={this.state.blood_type}
                onChange={this.handleChange}
                name="blood_type"
              />
            </div>
          </Input>
          <Imag src={this.state.profile_pic} alt="preview" />
          <Button onClick={this.createDonee}>submit</Button>

          <Link to="/">
            <span onClick={this.cancel}>Cancel</span>
          </Link>
        </Section>
        <Link to='/Donate' ><span class='donate-span'>Make A Donation</span></Link>
        <div className="flex">{mapped}</div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { user, user_id, blood_type } = reduxState;
  return { user, user_id, blood_type };
}

export default connect(
  mapStateToProps,
  { setUser }
)(withRouter(Donee));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  justify-content: space-between;
  position: absolute;
  margin-left: 900px;
  height: 85vh;
  margin-top: 15px;
  border-radius: 20px;
  border: solid black;
  background: linear-gradient(#e66465, #9198e5);
`;

const Imag = styled.img`
  height: 140px;
  width: 140px;
  z-index: 20;
  border-radius: 50%;
  border: 0.7px groove grey;
  margin-top: 1.4rem;
  box-shadow: 4px 2px 4px 3px #706f6f;
  border-left: 0px groove rgba(28, 110, 164, 0.18);
  margin-bottom: 30px;
`;
const Flex = styled.div`
  display: flex;

  justify-content: space-between;
  width: 300px;

  margin-left: 15px;
  height: 30vh;
  align-items: center;

  flex-direction: flex-start;

  border: solid black;
  border-radius: 35px;
  font-size: 2rem;
`;
const Input = styled.div`
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  width: 200px;
  margin: 20px 0;
`;
const Button = styled.div`
color: rgb(95, 210, 255); font-size: 9px; line-height: 9px; padding: 3px; border-radius: 5px; font-family: Georgia, serif; font-weight: normal; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none; background-image: linear-gradient(to right, rgb(28, 110, 164) 0%, rgb(35, 136, 203) 50%, rgb(20, 78, 117) 100%); box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px; border: 2px solid rgb(28, 110, 164); display: inline-block;}
.myButton:hover 
background: #1C6EA4; 
.myButton:active 
background: #144E75;
margin-top:18px;`
  
