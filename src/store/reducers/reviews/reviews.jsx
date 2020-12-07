import { ActionType } from "../../action";
import { adaptReviewServerToClient } from "../../../utils/adapter";

const initialState = {
  reviews: [],
};

export const reviews = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      const adaptedReviews = action.payload.map((review) =>
        adaptReviewServerToClient(review)
      );
      return { ...state, reviews: adaptedReviews };
  }

  return state;
};
