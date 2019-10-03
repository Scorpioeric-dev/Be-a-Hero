import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import store from "../Ducks/store";
import { CANCEL, setUser } from "../Ducks/reducer";
import axios from "axios";
import styled from "styled-components";

export class Donor extends Component {
  state = {
    title: "",
    profile_pic: "",

    blood_type: "",
    lung_id: false,
    kidney_id: false,
    liver_id: false,
    pancreas_id: false,
    hair_id: false,
    user_id:0,
    donorData: []
  };
  componentDidMount() {
    this.getDonorData();
  }
  getDonorData = () => {
    axios.get("/api/donorData").then(res => {
      this.setState({
        donorData: res.data
      });
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
    console.log(this.state);
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
    window.location.reload();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    // console.log(this.state)
  };
  handleChecked = e => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    if (isChecked === true) {
      this.setState({
        [e.target.name]: true
      });
    }
    if (isChecked === false) {
      this.setState({
        [e.target.name]: true
      });
    }
    // console.log(this.state)
  };
  cancel = () => {
    store.dispatch({
      type: CANCEL
    });
  };
  render() {
    let donor = this.state.donorData.map(data => {
      return (
        <Article>
          <div key={data.id}>
            <h5>Title: {data.title}</h5>
            <h5>BloodType: {data.blood_type}</h5>
          </div>
          <div>
            <Img src={data.profile_pic} alt="" />
          </div>
        </Article>
      );
    });
    return (
      <div>
        <Main>
          <input
            onChange={this.handleChange}
            name="profile_pic"
            type="text"
            placeholder="Profile"
            value={this.state.profile_pic}
          />
          <input
            name="title"
            type="text"
            placeholder="Title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <input
            placeholder="Bloodtype"
            type="text"
            value={this.state.blood_type}
            onChange={this.handleChange}
            name="blood_type"
          />
          <h5>Lung</h5>
          <input
            type="checkbox"
            name="lung_id"
            onChange={this.handleChecked}
            placeholder="Lung"
            value={this.state.lung_id}
          />
          <h5>Kidney</h5>
          <input
            type="checkbox"
            name="kidney_id"
            onChange={this.handleChecked}
            placeholder="kidney"
            value={this.state.kidney_id}
          />
          <h5>liver</h5>
          <input
            type="checkbox"
            name="liver_id"
            onChange={this.handleChecked}
            placeholder="liver"
            value={this.state.liver_id}
          />
          <h5>Pancreas</h5>
          <input
            type="checkbox"
            name="pancreas_id"
            onChange={this.handleChecked}
            placeholder="Pancreas"
            value={this.state.pancreas_id}
          />
          <h5>Hair</h5>
          <input
            type="checkbox"
            name="hair_id"
            onChange={this.handleChecked}
            placeholder="Hair"
            value={this.state.hair_id}
          />
          <Img src={this.state.profile_pic} alt="preview" />
          <button onClick={this.createDonor}>submit</button>
          <Link to="/landing">
            <span onClick={this.cancel}>Cancel</span>
          </Link>
        </Main>
        {donor}
      </div>
    );
  }
}


function mapStateToProps(reduxState) {
  const { user } = reduxState
  return { user }
}



export default connect(
  mapStateToProps,
  { setUser }
)(withRouter(Donor));


const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  justify-content: space-evenly;
  position: relative;
  left: 100px;
  top: 60px;
  height: 60vh;
  padding: 5%;
  border-radius: 20px;
`;
// const Profile = styled.img`
//   height: 100px;
//   width: 100px;
// border-radius:50%;
//   border: solid black;
//   margin: 80px;
//   position: relative;
// `;
const Img = styled.img`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  border: solid black;
  margin: 80px;
  position: relative;
`;
const Article = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: left;
  align-content: flex-start;
  margin-left: 200px;
  padding: 20px;
`;
