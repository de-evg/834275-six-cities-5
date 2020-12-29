import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateFavoriteStatus } from "../../store/api-action";

const FavoriteOffer = ({ hotel, favoriteBtnClickHandler }) => {
  const { id, isFavorite } = hotel;

  const defaultFavoriteBtnClasses = [`place-card__bookmark-button button`];
  const activeFavoriteBtnClasses = [
    ...defaultFavoriteBtnClasses,
    `place-card__bookmark-button--active`,
  ];
  const favoriteBtnClasses = isFavorite
    ? activeFavoriteBtnClasses.join(` `)
    : defaultFavoriteBtnClasses.join(``);

  const handleFavoriteBtnClick = useCallback(
    (evt) => {
      evt.preventDefault();
      favoriteBtnClickHandler(id, +!isFavorite);
    },
    [favoriteBtnClickHandler, id, isFavorite]
  );

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={hotel.previewImage}
            width="150"
            height="110"
            alt="Place image"
          />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;180</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={favoriteBtnClasses}
            type="button"
            onClick={handleFavoriteBtnClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: 100 }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{hotel.title}</a>
        </h2>
        <p className="place-card__type">{hotel.type}</p>
      </div>
    </article>
  );
};

FavoriteOffer.propTypes = {
  hotel: PropTypes.object.isRequired,
  favoriteBtnClickHandler: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  favoriteBtnClickHandler(id, status) {
    dispatch(updateFavoriteStatus(id, status));
  },
});

export default connect(null, mapDispatchToProps)(FavoriteOffer);
