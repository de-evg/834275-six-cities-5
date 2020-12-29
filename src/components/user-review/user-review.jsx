import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RatingStars from "../rating-stars/rating-stars";
import { postReview } from "../../store/api-action";
import { ActionCreator } from "../../store/action";

const defaultReview = {
  comment: ``,
  rating: -1,
  isTextValid: false,
  isRatingValid: false,
  isSanding: false,
};

const TEXT_LENGTH = {
  MIN: 30,
  MAX: 300,
};

const NOT_VALID_STYLE = { outline: `2px solid red` };

const UserReview = ({ id, onFormSubmit, isPostSuccess, resetPostStatus }) => {
  const [review, setReview] = useState(defaultReview);
  const { comment, rating, isCommentValid, isRatingValid, isSanding } = review;

  useEffect(() => {
    if (isPostSuccess) {
      setReview(defaultReview);
    }
    return resetPostStatus();
  }, [isPostSuccess, setReview, resetPostStatus]);

  const handleRatingStarValueChange = useCallback((newRating) => {
    let isValid = false;
    if (rating !== -1) {
      isValid = true;
    }
    setReview({
      ...review,
      isRatingValid: isValid,
      rating: newRating,
    });
  }, [setReview, review, rating]);

  const handleTextValueChange = useCallback(
    (evt) => {
      let isValid = false;
      evt.preventDefault();
      if (
        comment.length >= TEXT_LENGTH.MIN &&
        comment.length <= TEXT_LENGTH.MAX
      ) {
        isValid = true;
      }
      setReview({
        ...review,
        isCommentValid: isValid,
        comment: evt.target.value,
      });
    },
    [comment, review, setReview]
  );

  const validateStyle = {
    comment: isCommentValid || comment.length === 0 ? null : NOT_VALID_STYLE,
  };

  const handleFormSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      setReview({ ...review, isSanding: true });
      onFormSubmit(id, { comment, rating });
    },
    [id, comment, rating, onFormSubmit, review]
  );

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <RatingStars
        activeStar={rating}
        ratingChangeHandler={handleRatingStarValueChange}
      />
      <textarea
        className="reviews__textarea form__textarea"
        style={validateStyle.text}
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleTextValueChange}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{" "}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{" "}
          <b className="reviews__text-amount">{TEXT_LENGTH.MIN} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!(isCommentValid && isRatingValid) || isSanding}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

UserReview.propTypes = {
  id: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  isPostSuccess: PropTypes.bool.isRequired,
  resetPostStatus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isPostSuccess: state.REVIEWS.isPostSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit(id, body) {
    dispatch(postReview(id, body));
  },
  resetPostStatus() {
    dispatch(ActionCreator.resetReviewPost());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserReview);
