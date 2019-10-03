import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";
import store from "../Ducks/store";
import { CANCEL, setUser } from "../Ducks/reducer";
import { Link, withRouter } from "react-router-dom";
import Donor from "./Donor";

export class Donee extends Component {
  state = {
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
    console.log(this.state);
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
      });
    // window.location.reload();
  };

  getDoneeData = () => {
    axios.get("/api/doneeData").then(res => {
      this.setState({
        doneeData: res.data
      });
    });
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

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  };

  updateDonee = (id) => {
    const { title, profile_pic, blood_type } = this.state;
    
   
    axios
      .put(`/api/donee/${id}`, {
      
        title: title,
        profile_pic: profile_pic,
        blood_type: blood_type
      })
      .then(res => {
        this.setState({
          doneeData: res.data
        });
      });
      this.toggleEdit();
  };

  cancel = () => {
    store.dispatch({
      type: CANCEL
    });
  };
  render() {
    let mapped = this.state.doneeData.map(data => {
      console.log(data)
      return (
        <div>
          {!this.state.editing ? (
            <Flex>
              <div key={data.id} data={data}>
                <h5>Title: {data.title}</h5>
                <h5>blood_type: {data.blood_type}</h5>
                <button onClick={this.toggleEdit}>edit</button>
              </div>

              <Img src={data.profile_pic} alt="" />
            </Flex>
          ) : (
            <div>
              <input
                type="text"
                name="title"
                onChange={this.handleChange}
                placeholder="Edit title"
                defaultValue={data.title}
              />

              <input
                type="text"
                name="Blood_type"
                onChange={this.handleChange}
                placeholder="Edit Blood"
                defaultValue={data.blood_type}
              />
              <input
                type="text"
                name="profile_pic"
                onChange={this.handleChange}
                placeholder="Edit profile"
                defaultValue={data.profile_pic}
              />
              <Link to="">
                <button onClick={this.updateDonee(data.id)}>save</button>
              </Link>
            </div>
          )}
        </div>
      );
    });
    return (
      <div>
        <Section>
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
          <Link to="/Donee">
            <button onClick={this.createDonee}>submit</button>
          </Link>
          <Link to="/landing">
            <span onClick={this.cancel}>Cancel</span>
          </Link>
        </Section>
        <Donor />
        {mapped}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { user } = reduxState;
  return { user };
}

export default connect(
  mapStateToProps,
  { setUser }
)(withRouter(Donee));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  justify-content: space-evenly;
  position: absolute;
  left: 800px;
  top: 60px;
  height: 60vh;
  padding: 5%;
  border-radius: 20px;
  margin: 50;
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
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: solid black;
  margin: 80px;
  position: relative;
`;
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  align-content: flex-start;
  margin-left: 200px;
  padding: 20px;
`;
// const Parent = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 50px;
// `;
// const Article = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
