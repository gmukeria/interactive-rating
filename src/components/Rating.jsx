import starImg from "../assets/icon-star.svg";
import RatingElement from "./RatingElement";
import Card from "../components/Card";
import "./Rating.css";

const Rating = props => {
  const ratingItems = [1, 2, 3, 4, 5];

  return (
    <Card>
      <div className="star_img_container">
        <img src={starImg} alt="icon star" />
      </div>
      <h2 className="title">How did we do?</h2>
      <p className="text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating">
        {ratingItems.map(item => (
          <RatingElement
            activElement={props.activElement}
            title={item}
            changeRating={props.changeRating}
          />
        ))}
      </div>
      <button className="submit_btn" onClick={() => props.submit()}>
        Submit
      </button>
    </Card>
  );
};

export default Rating;
