import React, { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import OffersItem from "../offers-item/offers-item";
import { connect } from "react-redux";
import { fetchNearHotels } from "../../store/api-action";

const NearOffersList = ({ offerId, loadNearHotels, nearHotels }) => {
  useEffect(() => loadNearHotels(offerId), [loadNearHotels, offerId]);

  return (
    <div className="near-places__list places__list">
      {nearHotels.map((offer, i) => (
        <OffersItem offer={offer} key={`near-offer-${i}`} />
      ))}
    </div>
  );
};

NearOffersList.propTypes = {
  offerId: PropTypes.string.isRequired,
  nearHotels: PropTypes.array.isRequired,
  loadNearHotels: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  nearHotels: state.HOTELS.nearHotels
});

const mapDispatchToProps = (dispatch) => ({
  loadNearHotels(id) {
    dispatch(fetchNearHotels(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NearOffersList);
