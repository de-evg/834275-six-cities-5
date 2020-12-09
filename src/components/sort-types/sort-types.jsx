import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ActionCreator } from "../../store/action";
import { SortType } from "../../const";

const sortKeys = Object.keys(SortType);

const SortTypes = ({ activeSort, changeActiveSort }) => {
  const [isShowed, setIsShowed] = useState(false);

  const handleSortMenuClick = useCallback(() => setIsShowed(!isShowed));
  const handleSortMenuItemClick = useCallback((evt) => {
    changeActiveSort(evt.target.id);
    setIsShowed(!isShowed);
  });

  const handleEscPress = useCallback((evt) => {
    if (evt.key === `Escape`) {
      setIsShowed(false);
    }
  });

  useEffect(() => {
    if (isShowed) {
      document.addEventListener(`keydown`, handleEscPress);
    }
    return () => document.removeEventListener(`keydown`, handleEscPress);
  }, [isShowed]);

  return (
    <>
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={handleSortMenuClick}
      >
        {`${SortType[activeSort]}`}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isShowed && (
        <ul className="places__options places__options--custom places__options--opened">
          {sortKeys.map((key, i) => (
            <li
              className="places__option"
              tabIndex="0"
              id={key}
              onClick={handleSortMenuItemClick}
              key={`sort-${i}`}
            >
              {SortType[key]}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

SortTypes.propTypes = {
  activeSort: PropTypes.string.isRequired,
  changeActiveSort: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeSort: state.HOTELS.activeSort,
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveSort(sort) {
    dispatch(ActionCreator.setActiveSort(sort));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SortTypes);
