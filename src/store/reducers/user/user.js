import { AuthorizationStatus } from "../../../const";
import { ActionType } from "../../action";

const initialState = {
  authStatus: AuthorizationStatus.NO_AUTH,
  authError: false,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return { ...state, authStatus: action.payload };

    case ActionType.SHOW_AUTHORIZATION_ERROR:
      return { ...state, authError: true };
  };
  
  return state;
};
