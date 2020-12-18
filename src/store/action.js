const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SHOW_AUTHORIZATION_ERROR: `SHOW_AUTHORIZATION_ERROR`,
  LOAD_HOTELS: `LOAD_HOTELS`,
  LOAD_HOTEL: `LOAD_HOTEL`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  SET_ACTIVE_FILTER: `SET_ACTIVE_FILTER`,
  SET_ACTIVE_SORT: `SET_ACTIVE_SORT`,
  RESET_HOTEL: `RESET_HOTEL`,
  UPDATE_HOTEL: `UPDATE_HOTEL`,
  LOAD_NEAR_HOTELS: `LOAD_NEAR_HOTELS`
};

const ActionCreator = {
  requireAuthorization: (status) => ({
    type: `REQUIRED_AUTHORIZATION`,
    payload: status,
  }),
  showAuthrizationError: () => ({
    type: ActionType.SHOW_AUTHORIZATION_ERROR,
  }),
  loadHotels: (hotels) => ({
    type: `LOAD_HOTELS`,
    payload: hotels,
  }),
  loadHotel: (hotel) => ({
    type: `LOAD_HOTEL`,
    payload: hotel
  }),
  loadReviews: (reviews) => ({
    type: `LOAD_REVIEWS`,
    payload: reviews,
  }),
  setActiveFilter: (filter) => ({
    type: `SET_ACTIVE_FILTER`,
    payload: filter
  }),
  setActiveSort: (sort) => ({
    type: `SET_ACTIVE_SORT`,
    payload: sort
  }),
  resetHotel: () => ({
    type: `RESET_HOTEL`
  }),
  updateHotels: (update) => ({
    type: `UPDATE_HOTEL`,
    payload: update
  }),
  loadNearHotels: (hotels) => ({
    type: `LOAD_NEAR_HOTELS`,
    payload: hotels
  })
};

export { ActionCreator, ActionType };
