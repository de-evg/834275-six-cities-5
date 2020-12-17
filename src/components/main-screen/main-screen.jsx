import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CitiesList from "../cities-list/cities-list";
import Offers from "../offers/offers";
import User from "../user/user";
import Map from "../map/map";
import { connect } from "react-redux";
import {ActionCreator} from "../../store/action";

const MainScreen = ({ resetActiveOffer }) => {
  useEffect(() => {
    resetActiveOffer();
  });

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <User />
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <Offers />
            <div className="cities__right-section">
              <section className="cities__map map" id="map">
                <Map />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainScreen.propTypes = {
  resetActiveOffer: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  resetActiveOffer() {
    dispatch(ActionCreator.resetHotel());
  },
});

export default connect(null, mapDispatchToProps)(MainScreen);
