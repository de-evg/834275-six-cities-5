import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { appRoute, RoomType } from "../../const";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateFavoriteStatus } from "../../store/api-action";

const MAX_RATING = 5;
const RATING_ELEMENT_WIDTH = 73;

const OffersItem = ({ offer, favoriteBtnClickHandler }) => {
  const {
    isPremium,
    isFavorite,
    previewImage,
    price,
    rating,
    title,
    type,
    id,
  } = offer;
  const ratingWidth = (Math.round(rating) * RATING_ELEMENT_WIDTH) / MAX_RATING;

  const handleFavoriteBtnClick = useCallback((evt) => {
    evt.preventDefault();
    favoriteBtnClickHandler(id, +!isFavorite);
  }, [favoriteBtnClickHandler, id, isFavorite]);

  const defaultFavoriteBtnClasses = [`place-card__bookmark-button button`];
  const activeFavoriteBtnClasses = [...defaultFavoriteBtnClasses, `place-card__bookmark-button--active`];
  const favoriteBtnClasses = isFavorite ? activeFavoriteBtnClasses.join(` `) : defaultFavoriteBtnClasses.join(``);

  return (
    <article className="cities__place-card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${appRoute.OFFER}${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            onClick={handleFavoriteBtnClick}
            className={favoriteBtnClasses}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingWidth }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${appRoute.OFFER}${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{RoomType[type.toUpperCase()]}</p>
      </div>
    </article>
  );
};

OffersItem.propTypes = {
  offer: PropTypes.object.isRequired,
  favoriteBtnClickHandler: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  favoriteBtnClickHandler(id, status) {
    dispatch(updateFavoriteStatus(id, status));
  },
});

export default connect(null, mapDispatchToProps)(OffersItem);
