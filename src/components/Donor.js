import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import store from "../Ducks/store";
import { CANCEL, setUser } from "../Ducks/reducer";
import axios from "axios";
import styled from "styled-components";
import DonorProfile from "./DonorProfile";

export class Donor extends Component {
  state = {
    donor_id: "",
    title: "",
    profile_pic: "",
    editing: false,
    blood_type: "",
    lung_id: false,
    kidney_id: false,
    liver_id: false,
    pancreas_id: false,
    hair_id: false,
    user_id: 0,
    donorData: [],
    match: false,
    doneeData: []
  };
  componentDidMount() {
    this.getDonorData();
    this.getDoneeData();
  }
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
      //axios call not being hit here
    });
  };

  createDonor = () => {
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

    axios
      .post(`/api/donor`, {
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
          donor: res.data
        });
      });

    this.getDonorData();
  };

  // componentDidUpdate(previousProps, previousState) {
  //   if (previousState.donorData.length !== this.state.donorData.length) {
  //     this.render();
  //   }
  // }
  //create a matching functiion that allows a match between donor bloodtype and donee bloodtype
  // findMatch= () => {

  // }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    // console.log(this.state)
  };

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  };

  // toggleMatch = () => {
  //   this.setState({
  //     match: !this.state.match
  //   });
  // };
  // handleChecked = e => {
  //   const item = e.target.name;
  //   const isChecked = e.target.checked;
  //   if (isChecked === true) {
  //     this.setState({
  //       [e.target.name]: true
  //     });
  //   }
  //   if (isChecked === false) {
  //     this.setState({
  //       [e.target.name]: true
  //     });
  //   }
  //   // console.log(this.state)
  // };

  updateDonor = id => {
    const { title, profile_pic, blood_type } = this.state;
    // console.log("hi", id);
    axios
      .put(`/api/editDonor/${id}`, {
        donor_id: id,
        title: title,
        profile_pic: profile_pic,
        blood_type: blood_type
      })
      .then(res => {
        this.setState({
          donorData: res.data,
          editing: false
        });
        console.log("hit2", res.data);
        this.toggleEdit();
        // this.getDonorData();
      });
  };

  cancel = () => {
    store.dispatch({
      type: CANCEL
    });
  };
  render() {
    var mack = this.state.donorData
      .filter(el => el.blood_type === this.props.blood_type)
      .map(ele => {
        return (
          <DonorProfile
            key={ele.id}
            ele={ele}
            edit={this.toggleEdit}
            update={() => this.updateDonor(ele.donor_id)}
            handle={this.handleChange}
            editing={this.state.editing}
          />
        );
      });
    // console.log(this.state.donorData);

    return (
      <div>
        <div className="navoffset"></div>
        <Main>
          <Input>
            <div className="create">
              <h3>Create Your Profile</h3>
            </div>
            <div className="createinput">
              <input className='input1'
                onChange={this.handleChange}
                name="profile_pic"
                type="text"
                placeholder="Profile Picture"
                defaultvalue={this.state.profile_pic}
              />
              <input className='input1'
                name="title"
                type="text"
                placeholder="Donee-Donor"
                onChange={this.handleChange}
                defaultvalue={this.state.title}
              />
              <input className='input1'
                placeholder="Enter Bloodtype"
                type="text"
                defaultvalue={this.state.blood_type}
                onChange={this.handleChange}
                name="blood_type"
              />
            </div>
          </Input>
          <Imag src={this.state.profile_pic} alt="preview" />

          <Button onClick={this.createDonor}>submit</Button>

          <Link to="/">
            <span onClick={this.cancel}>Cancel</span>
          </Link>
        </Main>
        <Link to='/Donate' ><span class='donate-span'>Make A Donation</span></Link>
        <div className="flex">{mack}</div>
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
)(withRouter(Donor));

const Main = styled.div`
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
  background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
`;
// const Profile = styled.img`
//   height: 100px;
//   width: 100px;
// border-radius:50%;
//   border: solid black;
//   margin: 80px;
//   position: relative;
// `;

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
  position: absolute;

  height: 10vh;

  margin-top: 60px;
  border: solid black;
`;
const Input = styled.div`
  display: flex;
  border-radius: 40px;
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
  margin-top:18px;
  justify-content:space-between;
  margin-left:10px;

  `
