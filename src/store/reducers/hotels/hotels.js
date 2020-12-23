import { adaptHotelServerToClient } from "../../../utils/adapter";
import { ActionType } from "../../action";
import { DEFAULT_ACTIVE_FILTER, DEFAULT_ACTIVE_SORT } from "../../../const";

const initialState = {
  hotels: [],
  filteredHotels: [],
  hotel: {
    isPremium: false,
    images: [],
    title: ``,
    rating: 0,
    price: 0,
    goods: [],
    maxAdults: 0,
    bedrooms: 0,
    type: ``,
    description: ``,
    host: {
      avatarUrl: ``,
      isPro: false,
      name: ``,
    },
  },
  nearHotels: [],
  citiesCoord: {},
  activeFilter: DEFAULT_ACTIVE_FILTER,
  activeSort: DEFAULT_ACTIVE_SORT,
};

export const hotels = (state = initialState, action) => {
  let adaptedHotel;
  switch (action.type) {
    case ActionType.LOAD_HOTELS:
      const adaptedHotels = action.payload.map((hotel) =>
        adaptHotelServerToClient(hotel)
      );
      return { ...state, hotels: adaptedHotels };

    case ActionType.LOAD_HOTEL:
      adaptedHotel = adaptHotelServerToClient(action.payload);
      return { ...state, hotel: adaptedHotel };

    case ActionType.SET_ACTIVE_FILTER:
      return { ...state, activeFilter: action.payload };

    case ActionType.SET_ACTIVE_SORT:
      return { ...state, activeSort: action.payload };

    case ActionType.RESET_HOTEL:
      return { ...state, hotel: initialState.hotel };

    case ActionType.UPDATE_HOTELS:
      return { ...state, hotels: action.payload };

    case ActionType.LOAD_NEAR_HOTELS:
      const adaptedNearHotels = action.payload.map((hotel) =>
        adaptHotelServerToClient(hotel)
      );
      return { ...state, nearHotels: adaptedNearHotels };

    case ActionType.UPDATE_HOTEL:
      adaptedHotel = adaptHotelServerToClient(action.payload)
      const findeIndex = state.hotels
        .findIndex((hotel) => hotel.id === adaptedHotel.id)
      const updatedHotels = [...state.hotels.slice(0, findeIndex), adaptedHotel, ...state.hotels.slice(findeIndex + 1)];
      return { ...state, hotels:  updatedHotels};
  }

  return state;
};
