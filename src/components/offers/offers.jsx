import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import OffersList from "../offers-list/offers-list";
import SortTypes from "../sort-types/sort-types";

const Offers = ({ hotels }) => {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>
      <form className="places__sorting" action="#" method="get">
        
        <SortTypes />
      </form>
      <div className="cities__places-list places__list tabs__content">
        <OffersList />
      </div>
    </section>
  );
};

Offers.propTypes = {
  hotels: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  hotels: state.HOTELS.hotels
});

export default connect(mapStateToProps)(Offers);
