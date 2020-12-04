import React from "react";
import {Redirect, Route} from "react-router-dom";
import PropTypes from "prop-types";
import {appRoute, AuthorizationStatus} from "../../const";

const PrivateRoute = ({exact, path, render, authStatus = `AUTH`}) => (
  <Route
    exact={exact}
    path={path}
    render={(routeProps) => authStatus === AuthorizationStatus.AUTH
      ? render(routeProps)
      : <Redirect to={appRoute.SIGN_IN} />}
  />  
);

PrivateRoute.propTypes = {
  authStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired
};

export default PrivateRoute;