import {adaptHotelServerToClient} from "../../../utils/adapter";
import { ActionType } from "../../action";

const initialState = {
  hotels: [],
};

export const hotels = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_HOTELS:
      const adaptedHotels = action.payload.map((hotel) => adaptHotelServerToClient(hotel));
      return { ...state, hotels: adaptedHotels };
  };

  return state;
};
