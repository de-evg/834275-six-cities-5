import React from "react";
import thunk from "redux-thunk";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createApi } from "./services/api";
import { ActionCreator } from "./store/action";
import root from "./store/reducers/root";
import Error from "./components/error/error";
import App from "./components/app/app";
import { AuthorizationStatus } from "./const";
import {fetchHotels} from "./store/api-action";

const api = createApi(
  () =>
    store.dispatch(
      ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)
    ),
  () => store.dispatch(ActionCreator.showAuthrizationError())
);

const store = createStore(
  root,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

Promise.all([store.dispatch(fetchHotels())])
  .then(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById(`root`)
    );
  })
  .catch((err) => {
    render(<Error err={err}/>, document.getElementById(`root`));
  });
