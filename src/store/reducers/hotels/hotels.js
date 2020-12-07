import { ActionType } from "../../action";

const initialState = {
  hotels: [],
};

export const hotels = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_HOTELS:
      return { ...state, hotels: action.payload };
  };

  return state;
};
