import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import User from "../user/user";
import { appRoute, RoomType } from "../../const";
import Reviews from "../reviews/reviews";
import { fetchHotel } from "../../store/api-action";
import Gallery from "../gallery/gallery";
import { ActionCreator } from "../../store/action";
import { getNearOffers } from "../../selectors";
import OffersItem from "../offers-item/offers-item";
import Map from "../map/map";
import { changeFavoriteStatus } from "../../store/api-action";
import {AuthorizationStatus} from "../../const";

const MAX_NEAR_OFFERS = 3;

const OfferScreen = ({
  hotel,
  nearHotels,
  loadHotel,
  match: {
    params: { id },
  },
  favoriteStatusChangeHandler,
  authStatus
}) => {
  const [neighbourhood, setNeighbourhood] = useState([]);
  const [isFetched, setFetchStatus] = useState(false);
  const [offerInfo, setOffer] = useState({ isLoaded: false, offer: `` });
  const { isLoaded } = offerInfo;

  const {
    isPremium,
    images,
    title,
    rating,
    price,
    goods,
    maxAdults,
    bedrooms,
    type,
    description,
    host,
    isFavorite,
  } = hotel;
  const { avatarUrl, isPro, name } = host;

  const handleFavoriteChange = useCallback(() =>
    favoriteStatusChangeHandler(id, +!isFavorite),
    [favoriteStatusChangeHandler, id, isFavorite]
  );

  useEffect(() => {
    if (!isFetched) {
      loadHotel(id);
      setFetchStatus(true);
    }

    if (!isLoaded) {
      setOffer({ ...offerInfo, isLoaded: true, offer: hotel });
    }
    return () => ActionCreator.resetHotel();
  }, [loadHotel, isFetched, id, isLoaded, hotel, offerInfo]);

  const MAX_RATING = 5;
  const RATING_ELEMENT_WIDTH = 147;
  const ratingWidth = (Math.round(rating) * RATING_ELEMENT_WIDTH) / MAX_RATING;

  return (
    isLoaded && (
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

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <Gallery images={images} type={type} />
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                <div className="property__mark">
                  <span>{isPremium && `Premium`}</span>
                </div>
                <div className="property__name-wrapper">
                  <h1 className="property__name">{title}</h1>
                  <button
                    className="property__bookmark-button button"
                    type="button"
                    onClick={handleFavoriteChange}
                    disabled={authStatus === AuthorizationStatus.NO_AUTH}
                  >
                    {isFavorite ? (
                      <svg
                        className="property__bookmark-icon property__bookmark-button--active place-card__bookmark-icon"
                        width="31"
                        height="33"
                      >
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                    ) : (
                      <svg
                        className="property__bookmark-icon"
                        width="31"
                        height="33"
                      >
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                    )}

                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{ width: ratingWidth }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">
                    {rating}
                  </span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {RoomType[type.toUpperCase()]}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((good, i) => (
                      <li className="property__inside-item" key={`good-${i}`}>
                        {good}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="property__avatar user__avatar"
                        src={avatarUrl}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">{name}</span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">{description}</p>
                  </div>
                </div>
                <Reviews offerID={id} />
              </div>
            </div>
            <section className="property__map map" id="map">
              <Map />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list">
                {nearHotels.slice(0, MAX_NEAR_OFFERS).map((hotel, i) => (
                  <OffersItem offer={hotel} key={`near-offer-${i}`} />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    )
  );
};

OfferScreen.propTypes = {
  hotels: PropTypes.array.isRequired,
  hotel: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  loadHotel: PropTypes.func.isRequired,
  nearHotels: PropTypes.array.isRequired,
  favoriteStatusChangeHandler: PropTypes.func.isRequired,
  authStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  hotels: state.HOTELS.hotels,
  hotel: state.HOTELS.hotel,
  nearHotels: getNearOffers(state),
  authStatus: state.USER.authStatus
});

const mapDispatchToProps = (dispatch) => ({
  loadHotel(id) {
    dispatch(fetchHotel(id));
  },
  favoriteStatusChangeHandler(id, status) {
    dispatch(changeFavoriteStatus(id, status));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferScreen);
