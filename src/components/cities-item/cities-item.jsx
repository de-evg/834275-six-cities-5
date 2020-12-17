import React, { useCallback } from "react";
import PropTypes from "prop-types";

const CitiesItem = ({ filter, isActive, activeFilterChangeHandler }) => {
  const activeClass = isActive ? `tabs__item--active` : ``;
  const classes = [`locations__item-link`, `tabs__item`, activeClass];

  const handleActiveFilterChange = useCallback(
    (evt) => {
      evt.preventDefault();
      activeFilterChangeHandler(filter);
    },
    [activeFilterChangeHandler, filter]
  );

  return (
    <li className="locations__item" onClick={handleActiveFilterChange}>
      <a className={classes.join(` `)} href="#">
        <span>{filter}</span>
      </a>
    </li>
  );
};

CitiesItem.propTypes = {
  filter: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  activeFilterChangeHandler: PropTypes.func.isRequired,
};

export default CitiesItem;
