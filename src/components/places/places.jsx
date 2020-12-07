import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PlacesList from "../places-list/places-list";
import SortTypes from "../sort-types/sort-types";

const Places = ({ hotels }) => {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <SortTypes />
      </form>
      <div className="cities__places-list places__list tabs__content">
        <PlacesList places={hotels} />
      </div>
    </section>
  );
};

Places.propTypes = {
  hotels: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  hotels: state.HOTELS.hotels
});

export default connect(mapStateToProps)(Places);
