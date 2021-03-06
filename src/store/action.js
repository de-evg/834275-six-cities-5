const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SHOW_AUTHORIZATION_ERROR: `SHOW_AUTHORIZATION_ERROR`,
  LOAD_HOTELS: `LOAD_HOTELS`,
  LOAD_HOTEL: `LOAD_HOTEL`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  SET_ACTIVE_FILTER: `SET_ACTIVE_FILTER`,
  SET_ACTIVE_SORT: `SET_ACTIVE_SORT`,
  RESET_HOTEL: `RESET_HOTEL`,
  UPDATE_HOTELS: `UPDATE_HOTELS`,
  UPDATE_HOTEL: `UPDATE_HOTEL`,
  LOAD_NEAR_HOTELS: `LOAD_NEAR_HOTELS`,
  LOGIN: `LOGIN`,
  CHANGE_FAVORITE_STATUS: `CHANGE_FAVORITE_STATUS`,
  UPDATE_REVIEWS: `UPDATE_REVIEWS`,
  RESET_POST_STATUS: `RESET_POST_STATUS`
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
    payload: hotel,
  }),
  loadReviews: (reviews) => ({
    type: `LOAD_REVIEWS`,
    payload: reviews,
  }),
  setActiveFilter: (filter) => ({
    type: `SET_ACTIVE_FILTER`,
    payload: filter,
  }),
  setActiveSort: (sort) => ({
    type: `SET_ACTIVE_SORT`,
    payload: sort,
  }),
  resetHotel: () => ({
    type: `RESET_HOTEL`,
  }),
  updateHotels: (update) => ({
    type: `UPDATE_HOTELS`,
    payload: update,
  }),
  updateHotel: (update) => ({
    type: `UPDATE_HOTEL`,
    payload: update,
  }),
  loadNearHotels: (hotels) => ({
    type: `LOAD_NEAR_HOTELS`,
    payload: hotels,
  }),
  setUserInfo: (userInfo) => ({
    type: `LOGIN`,
    payload: userInfo,
  }),
  updateReviews: (reviews) => ({
    type: `UPDATE_REVIEWS`,
    payload: reviews
  }),
  resetReviewPost: () => ({
    type: `RESET_POST_STATUS`,    
  })
};

export { ActionCreator, ActionType };
