import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Review from "../review/reivew";
import { fetchReviews } from "../../store/api-action";
import UserReview from "../user-review/user-review";
import {AuthorizationStatus} from "../../const";

const Reviews = ({ offerID, reviews, loadReviews, authStatus }) => {
  const [isReviewsLoaded, setReviewsLoadedStatis] = useState(false); 

  useEffect(() => {
    if (!isReviewsLoaded) {
      setReviewsLoadedStatis(true);
      loadReviews(offerID);      
    }    
  }, [offerID, loadReviews, reviews, isReviewsLoaded]);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review, i) => (
          <Review review={review} key={`review-${i}`} />
        ))}
      </ul>
      {authStatus === AuthorizationStatus.AUTH && <UserReview />}            
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  loadReviews: PropTypes.func.isRequired,
  offerID: PropTypes.string.isRequired,
  authStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  reviews: state.REVIEWS.reviews,
  authStatus: state.USER.authStatus
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews(id) {
    dispatch(fetchReviews(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
