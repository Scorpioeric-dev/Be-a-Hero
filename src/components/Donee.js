import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";
import store from "../Ducks/store";
import { CANCEL, setUser } from "../Ducks/reducer";
import { Link, withRouter } from "react-router-dom";
import Donor from './Donor'
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
        // this.getDoneeData()
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

              <button onClick={() => this.updateDonee(e.donee_id)}>save</button>
            </Container>
          )}
        </div>
      );
    });
    return (
      <div>
        <Section>
          <Input>
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

          <div>
            <Link to="/landing">
              <span onClick={this.cancel}>Cancel</span>
            </Link>
          </div>
        </Section>
<Donor/>
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
  right: 60px;
  top: 300px;
  height: 60vh;
  margin-top: 25px;
  padding: 8px;
  border-radius: 20px;
  border: solid black;
`;
const Container = styled.div`
  background: #00000088;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
  position: absolute;
  left: 100px;
  top: 100px;
  height: 10vh;
  padding: 9px;
  margin-top: 30px;
`;

const Img = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  border: solid black;
  margin: 90px;
  position: relative;
`;
const Flex = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 3rem;
  justify-content: space-evenly;
  max-width: 350px;
  margin-top: 35px;
  margin-left: 15px;

  align-items: center;
  padding: 20px;
  flex-direction: center;
  background-color: #00000099;
  border: solid black;
  border-radius: 35px;
  font-size: 2rem;
`;
const Input = styled.div`
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 100px;
`;
