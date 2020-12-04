import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { appRoute } from "../../const";
import MainScreen from "../main-screen/main-screen";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={appRoute.MAIN}
          render={(props) => <MainScreen {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export {App};
export default connect(null, null)(App);
