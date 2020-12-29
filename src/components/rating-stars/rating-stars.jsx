import React from "react";
import PropTypes from "prop-types";
import RatingStar from "../rating-star/rating-star";

const STAR_COUNT = 5;
const stars = new Array(STAR_COUNT)
  .fill()
  .map((star, i) => (star = { value: i + 1 }));

const RatingStars = ({ activeStar, ratingChangeHandler }) => {
  return (
    <div className="reviews__rating-form form__rating">
      {stars
      .map((star, i) => (
        <RatingStar
          value={star.value}
          isActive={star.value === activeStar}
          key={`star-${i}`}
          starClickHander={ratingChangeHandler}
        />
      ))
      .reverse()}
    </div>
  );
};

RatingStars.propTypes = {
  activeStar: PropTypes.number.isRequired,
  ratingChangeHandler: PropTypes.func.isRequired,
};

export default RatingStars;
