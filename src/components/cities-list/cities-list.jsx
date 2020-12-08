import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import CitiesItem from "../cities-item/cities-item";
import { cities } from "../../const";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const CitiesList = ({activeCity, changeActiveCity}) => {
  const handleActiveCityChange = useCallback((city) => changeActiveCity(city));

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, i) => (
        <CitiesItem
          city={city}
          key={`city-${i}`}
          activeCityChangeHandler={handleActiveCityChange}
          isActive={city === activeCity}
        />
      ))}
    </ul>
  );
};

CitiesList.propTypes = {
  changeActiveCity: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  activeCity: state.HOTELS.activeCity
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveCity(city) {
    dispatch(ActionCreator.setActiveCity(city))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
