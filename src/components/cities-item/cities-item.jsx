import React, {useCallback} from "react";
import PropTypes from "prop-types";

const CitiesItem = ({ city, isActive, activeCityChangeHandler }) => {
  const activeClass = isActive ? `tabs__item--active` : ``;
  const classes = [`locations__item-link`, `tabs__item`, activeClass];

  const handleActiveCityChange = useCallback((evt) => {
    evt.preventDefault();
    activeCityChangeHandler(city);
  });

  return (
    <li className="locations__item" onClick={handleActiveCityChange}>
      <a className={classes.join(` `)} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
};

CitiesItem.propTypes = {
  city: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  activeCityChangeHandler: PropTypes.func.isRequired
};

export default CitiesItem;
