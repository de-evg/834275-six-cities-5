import { ActionType } from "../../action";
import { adaptReviewServerToClient } from "../../../utils/adapter";

const initialState = {
  reviews: [],
  isPostSuccess: false,
};

export const reviews = (state = initialState, action) => {
  let adaptedReviews;
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      adaptedReviews = action.payload.map((review) =>
        adaptReviewServerToClient(review)
      );
      return { ...state, reviews: adaptedReviews };
    case ActionType.UPDATE_REVIEWS:
      adaptedReviews = action.payload.map((review) =>
        adaptReviewServerToClient(review)
      );
      return { ...state, reviews: adaptedReviews, isPostSuccess: true };
    case ActionType.RESET_POST_STATUS:      
      return { ...state, isPostSuccess: false };
  }

  return state;
};
