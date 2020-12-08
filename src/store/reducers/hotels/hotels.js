import { adaptHotelServerToClient } from "../../../utils/adapter";
import { ActionType } from "../../action";
import { DEFAULT_ACTIVE_CITY } from "../../../const";

const initialState = {
  hotels: [],
  filterdHotels: [],
  hotel: {},
  activeCity: DEFAULT_ACTIVE_CITY,
};

export const hotels = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_HOTELS:
      const adaptedHotels = action.payload.map((hotel) =>
        adaptHotelServerToClient(hotel)
      );
      return { ...state, hotels: adaptedHotels };

    case ActionType.LOAD_HOTELS:
      const adaptedHotel = adaptHotelServerToClient(action.payload);
      return { ...state, hotel: adaptedHotel };

    case ActionType.SET_ACTIVE_CITY:
      return { ...state, activeCity: action.payload };
  }

  return state;
};
