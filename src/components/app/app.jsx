import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { appRoute, AuthorizationStatus } from "../../const";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import MainScreen from "../main-screen/main-screen";
import OfferScreen from "../offer-screen/offer-screen";
import PrivateRoute from "../private-route/private-route";
import { connect } from "react-redux";

const App = ({ authStatus }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={appRoute.MAIN} render={() => <MainScreen />} />

        <Route
          exact
          path={`${appRoute.OFFER}:id`}
          render={(props) => <OfferScreen match={props.match} />}
        />

        <Route exact path={appRoute.SIGN_IN}>
          {
            authStatus === AuthorizationStatus.AUTH 
              ? <Redirect to={appRoute.MAIN} />
              : <AuthScreen />
          }
        </Route>

        <PrivateRoute
          exact
          path={appRoute.FAVORITES}
          render={() => <FavoritesScreen />}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }),
  authStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authStatus: state.USER.authStatus,
});

export default connect(mapStateToProps)(App);
