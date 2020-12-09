import React from "react";
import PropTypes from "prop-types";
import OfferItem from "../offers-item/offers-item";

const OffersList = ({ offers }) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, i) => (
        <OfferItem offer={offer} key={`place-${i}`} />
      ))}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default OffersList;
