import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { appRoute } from "../../const";
import User from "../user/user";
import FavoriteList from "../favorite-list/favirite-list";
import { connect } from "react-redux";
import { getFavoriteHotels } from "../../selectors";

const FavoritesScreen = ({ favoriteHotels }) => {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={appRoute.MAIN}>
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <User />
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {!favoriteHotels.length ? (
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan yor future
                  trips.
                </p>
              </div>
            </section>
          ) : (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoriteList />
            </section>
          )}
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
};

FavoritesScreen.propTypes = {
  favoriteHotels: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  favoriteHotels: getFavoriteHotels(state),
});

export default connect(mapStateToProps)(FavoritesScreen);
