import { createSelector } from "reselect";
import { SortType } from "./const";

const sortOffers = (sortType, offers) => {
  switch (sortType) {
    case `LOW_TO_HIGHT`:
      return offers.sort((offerA, offerB) => offerA.price - offerB.price)
    case `HIGHT_TO_LOW`:
      return offers.sort((offerA, offerB) => offerB.price - offerA.price)
    case `TOP_RATED`:
      return offers.sort((offerA, offerB) => offerB.rating - offerA.rating)
    
    default: return offers;
  }    
};

export const getFilteredOffers = createSelector(
  (state) => state.HOTELS.hotels,
  (state) => state.HOTELS.activeFilter,
  (state) => state.HOTELS.activeSort,
  (offers, filter, sortType) => {
    const filteredOffers = offers.filter((offer) => offer.city.name === filter);
    return sortOffers(sortType, filteredOffers)
  }
);
