import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";
import store from "../Ducks/store";
import { CANCEL, setUser } from "../Ducks/reducer";
import { Link, withRouter } from "react-router-dom";

export class Donee extends Component {
  state = {
    blood_type: "",
    lung_id: false,
    kidney_id: false,
    liver_id: false,
    pancreas_id: false,
    hair_id: false
  };
  handleChange = e => {
    const {
      blood_type,
      lung_id,
      kidney_id,
      liver_id,
      pancreas_id,
      hair_id
    } = this.state;
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
    return (
      <div>
        
          <div>
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
            />
            <h5>Kidney</h5>
            <input
              type="checkbox"
              name="kidney_id"
              onChange={this.handleChecked}
              placeholder="kidney"
            />
            <h5>liver</h5>
            <input
              type="checkbox"
              name="liver_id"
              onChange={this.handleChecked}
              placeholder="liver"
            />
            <h5>Pancreas</h5>
            <input
              type="checkbox"
              name="pancreas_id"
              onChange={this.handleChecked}
              placeholder="Pancreas"
            />
            <h5>Hair</h5>
            <input
            type="checkbox"
            name="hair_id"
            onChange={this.handleChecked}
            placeholder="Hair"
            />
            <Link to="/landing">
              <span onClick={this.cancel}>Cancel</span>
            </Link>
          </div>
        
      </div>
    );
  }
}
export default connect(
  null,
  { setUser }
)(withRouter(Donee));

// const Section = styled.div`
//   background: pink;
//   color: pink;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 130px;
//   justify-content: space-evenly;
//   position: absolute;
//   left: 800px;
//   top: 60px;
//   height: 60vh;
//   padding: 5%;
//   border-radius: 20px;
// `;
