import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CitiesList from "../cities-list/cities-list";
import Offers from "../offers/offers";
import User from "../user/user";
import Map from "../map/map";
import { connect } from "react-redux";
import { ActionCreator } from "../../store/action";
import { getFilteredOffers } from "../../selectors";

const MainScreen = ({ resetActiveOffer, filteredOffers }) => {
  useEffect(() => {
    resetActiveOffer();
  });

  const mainClasses = filteredOffers.length
    ? `page__main page__main--index`
    : `page__main page__main--indexpage__main--index-empty`;

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

      <main className={mainClasses}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          {!filteredOffers.length ? (
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">
                    We could not find any property available at the moment in
                    Dusseldorf
                  </p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          ) : (
            <div className="cities__places-container container">
              <Offers />
              <div className="cities__right-section">
                <section className="cities__map map" id="map">
                  <Map />
                </section>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

MainScreen.propTypes = {
  resetActiveOffer: PropTypes.func.isRequired,
  filteredOffers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  filteredOffers: getFilteredOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  resetActiveOffer() {
    dispatch(ActionCreator.resetHotel());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
