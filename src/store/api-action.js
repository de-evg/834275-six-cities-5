import { APIRoute } from "../const";
import { ActionCreator } from "./action";

export const checkAuth = () => (dispatch, _getState, api) =>
  api
    .get(APIRoute.LOGIN)
    .then((response) => dispatch(ActionCreator.setUserInfo(response.data)))
    .then(() =>
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH))
    )
    .catch((err) => {
      Promise.reject(err.response);
    });

export const login = ({ login: email, password }) => (
  dispatch,
  _getState,
  api
) =>
  api
    .post(APIRoute.LOGIN, { email, password })
    .then((response) => dispatch(ActionCreator.setUserInfo(response.data)))
    .then(() =>
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH))
    );

export const fetchHotels = () => (dispatch, _getState, api) =>
  api
    .get(APIRoute.HOTELS)
    .then((response) => dispatch(ActionCreator.loadHotels(response.data)));

export const fetchHotel = (id) => (dispatch, _getState, api) =>
  api
    .get(APIRoute.HOTEL(id))
    .then((response) => dispatch(ActionCreator.loadHotel(response.data)));

export const fetchReviews = (id) => (dispatch, _getState, api) =>
  api
    .get(APIRoute.COMMENTS(id))
    .then((response) => dispatch(ActionCreator.loadReviews(response.data)));

export const fetchNearHotels = (id) => (dispatch, _getState, api) =>
  api
    .get(APIRoute.NEARBY(id))
    .then((response) => dispatch(ActionCreator.loadNearHotels(response.data)));

export const changeFavoriteStatus = (id, status) => (
  dispatch,
  _getState,
  api
) =>
  api
    .post(`${APIRoute.FAVORITE(id)}/${status}`)
    .then(({ data }) => dispatch(ActionCreator.updateHotels(data)));
