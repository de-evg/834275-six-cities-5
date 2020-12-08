import React from "react";
import PropTypes from "prop-types";
import OfferItem from "../places-item/offers-item";
import { connect } from "react-redux";
import { getFilteredOffers } from "../../selectors";

const OffersList = ({ filteredOffers }) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {filteredOffers.map((offer, i) => (
        <OfferItem offer={offer} key={`place-${i}`} />
      ))}
    </div>
  );
};

OffersList.propTypes = {
  filteredOffers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  filteredOffers: getFilteredOffers(state)
});

export default connect(mapStateToProps)(OffersList);
