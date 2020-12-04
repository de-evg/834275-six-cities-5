import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { appRoute } from "../../const";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import MainScreen from "../main-screen/main-screen";
import OfferScreen from "../offer-screen/offer-screen";
import PrivateRoute from "../private-route/private-route";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={appRoute.MAIN} render={() => <MainScreen />} />

        <Route exact path={appRoute.OFFER} render={() => <OfferScreen />} />

        <Route exact path={appRoute.SIGN_IN} render={() => <AuthScreen />} />

        <PrivateRoute exact path={appRoute.FAVORITES} render={() => <FavoritesScreen />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
