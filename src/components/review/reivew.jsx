import React from "react";
import PropTypes from "prop-types";

const MAX_RATING = 5;

const Review = ({review}) => {
  const { comment, date, rating, user } = review
  const { avatarUrl, isPro, name } = user;
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();
  const updatedData = date.toLocaleDateString(`en-US`, {
    year: `numeric`,
    month: `long`,
  });
  const ratingToPercent = Math.round(rating) * 100 / MAX_RATING;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: ratingToPercent }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={`${year}-${month}-${day}`}>
          {updatedData}
        </time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  })  
};

export default Review;
