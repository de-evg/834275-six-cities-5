import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import OffersList from "../offers-list/offers-list";
import SortTypes from "../sort-types/sort-types";
import { getFilteredOffers } from "../../selectors";

const Offers = ({ filteredOffers, activeFilter }) => {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{filteredOffers.length} places to stay in {activeFilter}</b>
      <form className="places__sorting" action="#" method="get">
        
        <SortTypes />
      </form>
      <div className="cities__places-list places__list tabs__content">
        <OffersList offers={filteredOffers} />
      </div>
    </section>
  );
};

Offers.propTypes = {
  filteredOffers: PropTypes.array.isRequired,
  activeFilter: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  filteredOffers: getFilteredOffers(state),
  activeFilter: state.HOTELS.activeFilter
});

export default connect(mapStateToProps)(Offers);
