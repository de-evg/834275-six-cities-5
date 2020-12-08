import { APIRoute } from "../const";
import { ActionCreator } from "./action";

const checkAuth = () => (dispatch, _getState, api) =>
  api
    .get(APIRoute.LOGIN)
    .then((response) => dispatch(ActionCreator.setUserInfo(response.data)))
    .then(() =>
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH))
    )
    .catch((err) => {
      Promise.reject(err.response);
    });

const login = ({ login: email, password }) => (dispatch, _getState, api) =>
  api
    .post(APIRoute.LOGIN, { email, password })
    .then((response) => dispatch(ActionCreator.setUserInfo(response.data)))
    .then(() =>
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH))
    );

const fetchHotels = () => (dispatch, _getState, api) =>
  api
    .get(APIRoute.HOTELS)
    .then((response) => dispatch(ActionCreator.loadHotels(response.data)));

const fetchHotel = () => (dispatch, _getState, api) =>
  api
    .get(APIRoute.HOTEL)
    .then((response) => dispatch(ActionCreator.loadHotel(response.data)));

const fetchReviews = (id) => (dispatch, _getState, api) =>
  api
    .get(APIRoute.COMMENTS(id))
    .then((response) => dispatch(ActionCreator.loadReviews(response.data)))
    .catch((err) => console.log(err));

export { checkAuth, login, fetchHotels, fetchReviews };
