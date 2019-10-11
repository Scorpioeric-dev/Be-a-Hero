import React, { Component } from "react";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";
import Header from "./Header";
import pic1 from './images/31m.png'
import pic2 from './images/37m.jpg'

export default class Home extends Component {
  render() {
    return (
      <div className='outer-home'>
      <div className="save-lives">
      </div>
<div className='navoffset'>
</div>
        <div className="About">
          <div className="about-pics">
        
            <img
              className="one"
              src="https://www.kidneyfund.org/assets/images/banner-images/donate-life.png"
              alt="inspiration"
            />
            <img
              className="two"
              src={pic1}
              alt="inspiration"
            />
            <img
              className="three"
              src="https://www.kidneyfund.org/assets/images/banner-images/donate-life.png"
              alt="inspiration"
            />
            <img
            className="four"
            src={pic2}
            alt="inspiration"
          />
          
        
        
          </div>
        </div>
        <div className='home'>
        <p>Nearly 100,000 people are on the waiting list for a kidney transplant. Many more people are waiting for a kidney than for all other organs combined. Unfortunately, the number of people waiting for kidneys is much larger than the number of available kidneys from living and deceased donors. You can save a life by being a kidney donor.</p>
        <h1>Being a living kidney donor</h1>
        <hr/>
        <p>If you have two healthy kidneys, you may be able to donate one of your kidneys to enhance or save someone else’s life. Both you and the recipient of your kidney (the person who got your kidney) can live with just one healthy kidney.

        If you are interested in living kidney donation: </p>
        <ul><li type='disc'>
          Contact the transplant center where a transplant candidate is registered.
        </li>
        <li type='disc'>
          You will need to have an evaluation at the transplant center to make sure that you are a good match for the person you want to donate to and that you are healthy enough to donate.
        </li>
        <li type='disc'>
          If you are a match, healthy, and willing to donate, you and the recipient can schedule the transplant at a time that works for both of you.
        </li>
        <li type='disc'>
          If you are not a match for the intended recipient, but still want to donate your kidney so that the recipient you know can receive a kidney that is a match, paired kidney exchange may be an option for you
        </li></ul>
        <p>Another way to donate a kidney while you are alive is to give a kidney to someone you do not necessarily know. This is called living non-directed donation. If you are interested in donating a kidney to someone you do not know, the transplant center might ask you to donate a kidney when you are a match for someone who is waiting for a kidney in your area, or as part of kidney paired donation. You will never be forced to donate.</p>
        <h1>Benefits and risks of living kidney donation</h1>
        <hr/>
        <p>Benefits</p>
        <p>There is no doubt that being a living donor is a huge benefit to the recipient (the person who gets your kidney). Recipients of a living donor kidney usually live longer, healthier lives compared to those who receive a deceased donor kidney (a kidney from someone who has just died).  It is important to recognize there can be benefits to the donor, as well. Some of these are:</p>
        <ul><li type='disc'>
          Saving the life of another person
        </li>
        <li type='disc'>
          Giving a renewed, and improved quality of life to another person
        </li>
        <li type='disc'>
          Greater understanding of your own health or health conditions
        </li> </ul>
        <p>Risks</p>
        <p>As a kidney donor, your risk of having kidney failure later in your life is not any higher than it is for someone in the general population of a similar age, sex or race.

        However, you are more likely to have kidney failure than healthy people who are not donors. On average, donors have 25-35% permanent loss of kidney function after surgery.
        
        It is important to recognize that there are risks with any type of surgery, which the transplant team will explain to you in detail. Some of these include:
        
        Pain, feeling tired, hernia, blood clots, pneumonia, nerve injury, bowel obstruction
        Some people who donate an organ may experience anxiety, depression, or fear after the surgery. Financial stress can also come as a result of donation, as you may need to take time off from work.  Talk to the transplant team during the evaluation process to find ways to manage these stresses.</p>
        <p>Living donor surgery</p>
        <hr/>
        <p>If you want to be a living donor, you will need to have a medical exam with blood tests to be sure you are healthy enough to donate a kidney. Some of the tests needed may include:</p>
        <ul><li type='disc'>Blood tests</li><li type="disc">Urine tests</li><li type='disc'>Pap smear/ gynecological exam</li><li type='disc'>Colonoscopy (if over age 50)</li><li type='disc'>Colonoscopy (if over age 50)</li><li type='disc'>Screening tests for cancer</li><li type='disc'>Antibody test</li><li type='disc'>X-ray</li><li type='disc'>Electrocardiogram (EKG) which looks at your heart</li><li type='disc'>Other image testing like a CT scan</li></ul>
        <p>You are also required to meet with a psychologist and an Independent Living Donor Advocate to be sure you are mentally and emotionally ready to donate one of your kidneys.

        If you are found to be healthy, and your antibodies and blood type are well-matched to the person getting your kidney, you may be approved to donate your kidney. </p>
        <p>The surgery</p>
        <p>Most kidney transplant surgeries are done laparoscopically . A laparoscopic surgery is a new surgery method that uses very small cuts on the body and a thin lighted tube to look inside the body. In a laparoscopic kidney donor surgery, the surgeon makes small cuts on the donor’s stomach, and the kidney is removed through an incision just big enough for it to fit through. This operation takes 2-3 hours, and a kidney donor usually spends 1-3 days in the hospital recovering. The recovery period after laparoscopic surgery is much shorter than after a traditional open surgery. There are also fewer complications with laparoscopic surgery. <br/><br/>

        Before the use of laparoscopic surgery, the kidney was removed from a larger, open cut, causing a longer recovery period for the patient, compared to the laparoscopic method.</p>
        </div>
      </div>
    );
  }
}

// const Img = styled.img`
//   height: 100vh;
//   width: 100vw;
//   margin: none;
//   clip-path: polygon(0 12%, 100% 12%, 100% 77%, 35% 100%, 0 100%);
// `;
// const Content = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
// `;
