import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import CitiesItem from "../cities-item/cities-item";
import { cities } from "../../const";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const CitiesList = ({activeFilter, changeActiveFilter}) => {
  const handleActiveFilterChange = useCallback((filter) => changeActiveFilter(filter));

  return (
    <ul className="locations__list tabs__list">
      {cities.map((filter, i) => (
        <CitiesItem
          filter={filter}
          key={`city-${i}`}
          activeFilterChangeHandler={handleActiveFilterChange}
          isActive={filter === activeFilter}
        />
      ))}
    </ul>
  );
};

CitiesList.propTypes = {
  changeActiveFilter: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  activeFilter: state.HOTELS.activeFilter
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveFilter(city) {
    dispatch(ActionCreator.setActiveFilter(city))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
