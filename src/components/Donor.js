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
    
    axios
    .post(`/api/donor`, {
        title,
        profile_pic,
        blood_type,
        lung_id,
        kidney_id,
        liver_id,
        pancreas_id,
        hair_id,
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
                // console.log(this.state.donorData)
                var mapdonor = this.state.donorData.map(ele => {
                  return(
                    
                    <DonorProfile
                    key={ele.id}
                    ele={ele}
                    edit={this.toggleEdit}
                    update={() => this.updateDonor(ele.donor_id)}
                    handle={this.handleChange}
                    editing={this.state.editing}
                    />
                    )
                  });
                  // console.log('hit',mapdonor)

    return (
      <div>
        <Main>
          <Input>
            <div className="create">
              <h3>Create Your Profile</h3>
            </div>
            <input
              onChange={this.handleChange}
              name="profile_pic"
              type="text"
              placeholder="Profile"
              defaultvalue={this.state.profile_pic}
            />
            <input
              name="title"
              type="text"
              placeholder="Title"
              onChange={this.handleChange}
              defaultvalue={this.state.title}
            />
            <input
              placeholder="Bloodtype"
              type="text"
              defaultvalue={this.state.blood_type}
              onChange={this.handleChange}
              name="blood_type"
            />
          </Input>
          <Imag src={this.state.profile_pic} alt="preview" />

          <button onClick={this.createDonor}>submit</button>

          <Link to="/landing">
            <span onClick={this.cancel}>Cancel</span>
          </Link>
        </Main>
        {mapdonor}
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
  width: 200px;
  justify-content: space-evenly;
  position: absolute;
  left: 800px;
  top: 75px;
  height: 75vh;

  border-radius: 20px;
  border: solid black;
  background-color: #00000088;
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
  margin: 90px;
  position: relative;
  margin-left: 10px;
`;
const Imag = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: solid black;
  margin: 90px;
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
const Input = styled.div`
  display: flex;
  border-radius: 20px;
  flex-direction: column;

  margin-top: 100px;
`;
