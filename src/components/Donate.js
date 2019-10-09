import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import "./Donate.css";
import Swal from "sweetalert2";

class Donate extends Component {
  constructor() {
    super();
    this.state = {
      amount: ''
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
        Swal.fire({type:'success',text:res.data.message})
        console.log(res);
        alert(`You donated ${amount}`);
      });
  };
  render() {
    return (
      <div className="parent">
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
          >
          </StripeCheckout>

          <input
            value={this.state.amount}
            type="number"
            onChange={e =>
              this.setState({
                amount: +e.target.value
              })
            }
          />
          
          
          

        </div>
      </div>
    );
  }
}
export default Donate;

const imageUrl = "https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg";
