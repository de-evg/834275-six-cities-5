import React from "react";
import PropTypes from "prop-types";

const CitiesItem = ({city}) => {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{city}</span>
      </a>
    </li>
  );
};

CitiesItem.propTypes = {
  city: PropTypes.string
};

export default CitiesItem;
