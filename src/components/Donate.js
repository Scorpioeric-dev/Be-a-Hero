import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import "./Donate.css";
import Swal from "sweetalert2";
import styled from "styled-components";
import {withRouter} from 'react-router-dom'


class Donate extends Component {
  constructor() {
    super();
    this.state = {
      amount: ""
    };
  }
  onOpened = () => {
    console.log("this is opened");
  };
  onClosed = () => {
    console.log("this is closed");
  };

  onToken = token => {
    console.log(token);
    let { amount } = this.state;
    amount /= 100;
    console.log(amount);
    token.card = void 0;
    axios
      .post("/api/payment", { token, amount: this.state.amount })
      .then(res => {
        // insert swal alert here when functional
        Swal.fire({ type: "success", text: res.data.message });
        console.log(res);
        this.props.history.push('/')
        
      });
    };
    render() {
      return (
        <div className="parent">
        
        <div className='donate'>
        <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5wWlqm32vX7efKcpGg73KkiB6UaoCOp9DttJ54H8d-KY3ceL0Vw' alt=''/>
        </div>
        
        <div className="stripe">
          <StripeCheckout
            name="Donate"
            image={imageUrl}
            description="You are so kind"
            stripeKey={process.env.react_app_stripe_key}
            token={this.onToken}
            amount={this.state.amount}
            currency="USD"
            panelLabel="Process Payment"
            Locale="en"
            opened={this.onOpened}
            closed={this.onClosed}
            ></StripeCheckout>
            <input className='stripeinput'
              value={this.state.amount}
              type="number" 
              onChange={e =>
                this.setState({
                  amount: +e.target.value
                })
              }
              />
              <h1 className='donate-text'>Whole numbers only Please!</h1>
            


        </div>
      </div>
    );
  }
}
export default Donate;

const imageUrl = "https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg";

const Img = styled.img`
  display: flex;
  flex-direction:column;
  position:absolute
  width:90vw;
  height:70vh;
  justify-content:center;
  margiin-bottom:10px;

`;
