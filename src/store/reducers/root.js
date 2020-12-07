import { combineReducers } from "redux";
import { user } from "../reducers/user/user";
import { hotels } from "./hotels/hotels";

const NameSpace = {
  USER: `USER`,
  HOTELS: `HOTELS`,
};

export default combineReducers({
  [NameSpace.USER]: user,
  [NameSpace.HOTELS]: hotels,
});
