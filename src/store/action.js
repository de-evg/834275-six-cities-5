const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SHOW_AUTHORIZATION_ERROR: `SHOW_AUTHORIZATION_ERROR`,
  LOAD_HOTELS: `LOAD_HOTELS`,
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
};

export { ActionCreator, ActionType };
