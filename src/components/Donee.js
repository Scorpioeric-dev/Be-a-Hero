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

        this.getDoneeData();
      });
  };

  componentDidUpdate(previousProps, previousState) {
    if (previousState.doneeData.length !== this.state.doneeData.length) {
      this.render();
    }
  }

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

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  };

  updateDonee = id => {
    const { title, profile_pic, blood_type } = this.state;
    console.log("hit", id);

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
        console.log("hit2", res.data);
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
    // console.log(this.props);
    let mapped = this.state.doneeData.map(e => {
      return (
        <div key={e.donee_id}>
          {!this.state.editing ? (
            <div>
              <Flex>
                <div className="text">
                  <div>Title: {e.title}</div>
                  <h5>blood_type: {e.blood_type}</h5>
                  {e.user_id === this.props.user_id ? (
                    <button onClick={this.toggleEdit}>edit</button>
                  ) : null}

                  <div>
                    <Img src={e.profile_pic} alt="" />
                  </div>
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
            
                <button onClick={() => this.updateDonee(e.donee_id)}>
                  save
                </button>
              
            </Container>
          )}
        </div>
      );
    });
    return (
      <div>
        <Section>
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
          <Img src={this.state.profile_pic} alt="preview" />
          <button onClick={this.createDonee}>submit</button>
          
            <Link to="/landing">
              <span onClick={this.cancel}>Cancel</span>
            </Link>
        
        </Section>

        {mapped}
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
)(withRouter(Donee));

const Section = styled.div`
  background: #00000088;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
  position: absolute;
  left: 800px;
  top: 75px;
  height: 75vh;

  border-radius: 20px;
  border: solid black;
`;
const Container = styled.div`
  background: #00000088;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-eve;
  align-items: center;
  width: 300px;
  position: relative;
  left: 20px;
  top: 100px;
  height: 10vh;
  padding: 9px;
  input{margin-bottom:5px}
  float:center;
`;

const Img = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: solid black;
  margin: 90px;
  position: relative;
`;
const Flex = styled.div`
  display: flex;

  column-gap: 2rem;
  row-gap: 3rem;
  justify-content: space-between;
  width: 300px;

  margin-left: 205px;
  height: 30vh;
  align-items: center;

  flex-direction: center;
  background-color: #00000088;
  border: solid black;
  border-radius: 35px;
  font-size: 2rem;
  
`;
const Input = styled.div`
  display: flex;
  border-radius: 20px;
  flex-direction: column;

  margin-top: 100px;
`;
