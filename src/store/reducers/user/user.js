import { AuthorizationStatus } from "../../../const";
import { ActionType } from "../../action";
import { adaptUserInfoServerToClient } from "../../../utils/adapter";

export const initialState = {
  authStatus: AuthorizationStatus.NO_AUTH,
  authError: false,
  userInfo: {},
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return { ...state, authStatus: action.payload };

    case ActionType.SHOW_AUTHORIZATION_ERROR:
      return { ...state, authError: true };

    case ActionType.LOGIN:
      return {
        ...state,
        userInfo: adaptUserInfoServerToClient(action.payload),
      };
  }

  return state;
};
