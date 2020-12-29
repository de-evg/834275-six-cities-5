import React from "react";
import PropTypes from "prop-types";
import FavoriteOffer from "../favorite-offer/favorite-offer";

const FavoriteItem = ({ hotels, city }) => {  
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {hotels.map((hotel, i) => (
          <FavoriteOffer hotel={hotel} key={`favoriteOffer-${i}`} />
        ))}
      </div>
    </li>
  );
};

FavoriteItem.propTypes = {
  hotels: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
};

export default FavoriteItem;
