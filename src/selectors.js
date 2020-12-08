import { createSelector } from "reselect";

const getFilteredOffers = createSelector(
  (state) => state.HOTELS.hotels,
  (state) => state.HOTELS.activeCity,
  (hotels, city) => {
    return hotels.filter((hotel) => hotel.city.name === city);
  }
);

export { getFilteredOffers };
