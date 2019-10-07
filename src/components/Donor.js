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
    editing: false,
    blood_type: "",
    lung_id: false,
    kidney_id: false,
    liver_id: false,
    pancreas_id: false,
    hair_id: false,
    user_id: 0,
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
    this.getDonorData();
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
    console.log(this.state);
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
        this.toggleEdit();
      });
  };

  cancel = () => {
    store.dispatch({
      type: CANCEL
    });
  };
  render() {
    let donor = this.state.donorData.map(ele => {
      return (
        <div key={ele.id}>
          {this.state.editing ? (
            <div>
              <Flex>
                <div>
                  <h5>Title: {ele.title}</h5>
                  <h5>BloodType: {ele.blood_type}</h5>
                </div>
                {ele.user_id === this.props.user_id ? (
                  <button onClick={this.toggleEdit}>toggleEdit</button>
                ) : null}
                <div>
                  <Img src={ele.profile_pic} alt="" />
                </div>
              </Flex>
            </div>
          ) : (
            <Container>
              <input
                type="text"
                name="title"
                onChange={this.handleChange}
                placeholder="Edit title"
                value={this.state.title}
              />

              <input
                type="text"
                name="blood_type"
                onChange={this.handleChange}
                placeholder="Edit Blood"
                value={this.state.blood_type}
              />
              <input
                type="text"
                name="profile_pic"
                onChange={this.handleChange}
                placeholder="Edit profile"
                value={this.state.profile_pic}
              />

              <button onClick={() => this.updateDonor(ele.donor_id)}>
                save
              </button>
            </Container>
          )}
        </div>
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
  const { user, user_id } = reduxState;
  return { user, user_id };
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
  top: 250px;
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
  justify-content: center;
  max-width: 400px;
  margin: 10;
  border: solid black;
  padding: 20px;
`;
const Flex = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 3rem;
  justify-content: space-evenly;
  max-width: 400px;
  margin-top: 35px;
  margin-left: 15px;
  align-items: center;
  padding: 20px;
  flex-direction: flex-start;
  background-color: #00000099;
  border: solid black;
  border-radius: 35px;
  font-size: 2rem;
`;
const Container = styled.div`
  background: #00000088;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
  position: absolute;
  left: 100px;
  top: 100px;
  height: 10vh;
  padding: 9px;
  margin-top: 30px;
  border: solid black;
`;
