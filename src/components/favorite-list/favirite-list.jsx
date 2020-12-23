import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FavoriteItem from "../favorite-item/favorite-item";
import { getFavoriteHotels } from "../../selectors";

const FavoriteList = ({ favoriteHotels }) => {
  return (
    <ul className="favorites__list">
      {favoriteHotels.map((hotel, i) => (
        <FavoriteItem hotel={hotel} key={`favorite-${i}`} />
      ))}
    </ul>
  );
};

FavoriteList.propTypes = {
  favoriteHotels: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  favoriteHotels: getFavoriteHotels(state),
});

export default connect(mapStateToProps)(FavoriteList);
