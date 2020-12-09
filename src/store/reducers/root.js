import { combineReducers } from "redux";
import { user } from "./user/user";
import { hotels } from "./hotels/hotels";
import { reviews } from "./reviews/reviews";

const NameSpace = {
  USER: `USER`,
  HOTELS: `HOTELS`,
  REVIEWS: `REVIEWS`,
};

export default combineReducers({
  [NameSpace.USER]: user,
  [NameSpace.HOTELS]: hotels,
  [NameSpace.REVIEWS]: reviews,
});
