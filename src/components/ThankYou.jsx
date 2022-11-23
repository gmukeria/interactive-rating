import React from "react";
import Card from "./Card";
import thankYouImg from "../assets/illustration-thank-you.svg";
import "./ThankYou.css";

const ThankYou = props => {
  return (
    <Card>
      <div className="thank_you_img_container">
        <img src={thankYouImg} alt="" />
      </div>
      <div className="selected">
        <p> You selected {props.activElement} out of 5</p>
      </div>

      <h2 className="title">Thank you!</h2>
      <p className="text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </Card>
  );
};

export default ThankYou;
