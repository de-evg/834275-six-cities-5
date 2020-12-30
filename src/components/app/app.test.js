import React from "react";
import { App } from "./app";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import {initialState as hotelState} from "../../store/reducers/hotels/hotels";
import {initialState as reviewsState} from "../../store/reducers/reviews/reviews";
import {initialState as userState} from "../../store/reducers/user/user";

describe(`render App`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let AppComponent = null;

  beforeEach(() => {
    store = mockStore({
      HOTELS: hotelState,
      REVIEWS: reviewsState,
      USER: userState
    });

    store.dispatch = jest.fn();

    AppComponent = renderer
    .create(
      <Provider store={store}>
        <App authStatus={``}/>
      </Provider>
    )    
  });

  
  it(`should App render correctly`, () => {
    expect(AppComponent.toJSON()).toMatchSnapshot();
  });
});
