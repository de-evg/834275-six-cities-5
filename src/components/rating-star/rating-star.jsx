import React, { useCallback } from "react";
import PropTypes from "prop-types";

const RatingStar = ({ value, isActive, starClickHander }) => {
  const handleInputChange = useCallback(
    (evt) => {
      evt.preventDefault();
      starClickHander(+evt.target.value);
    },
    [starClickHander]
  );

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        checked={isActive}
        onChange={handleInputChange}
      />
      <label
        htmlFor={`${value}-stars`}
        className="reviews__rating-label form__rating-label"
        title="perfect"
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
};

RatingStar.propTypes = {
  value: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  starClickHander: PropTypes.func.isRequired,
};

export default RatingStar;
