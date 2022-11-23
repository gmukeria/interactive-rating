import React from "react";

const RatingElement = props => {
  let activeClass = props.activElement === props.title ? "active" : "";

  return (
    <div
      className={"rating_container " + activeClass}
      onClick={() => props.changeRating(props.title)}
    >
      {props.title}
    </div>
  );
};

export default RatingElement;
