const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SHOW_AUTHORIZATION_ERROR: `SHOW_AUTHORIZATION_ERROR`,
  LOAD_HOTELS: `LOAD_HOTELS`,
  LOAD_HOTEL: `LOAD_HOTEL`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`
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
  setActiveCity: (city) => ({
    type: `SET_ACTIVE_CITY`,
    payload: city
  })
};

export { ActionCreator, ActionType };
