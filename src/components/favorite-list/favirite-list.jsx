import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FavoriteItem from "../favorite-item/favorite-item";
import { getFavoriteHotels } from "../../selectors";
import { cities } from "../../const";

const HotelsInCity = {
  PARIS: (hotels) => hotels.filter((hotel) => hotel.city.name === cities[0]),
  COLOGNE: (hotels) => hotels.filter((hotel) => hotel.city.name === cities[1]),
  BRUSSELS: (hotels) => hotels.filter((hotel) => hotel.city.name === cities[2]),
  AMSTERDAM: (hotels) =>
    hotels.filter((hotel) => hotel.city.name === cities[3]),
  HAMBURG: (hotels) => hotels.filter((hotel) => hotel.city.name === cities[4]),
  DUSSELDORF: (hotels) =>
    hotels.filter((hotel) => hotel.city.name === cities[5]),
};

const generateFavoriteOffers = (favoriteHotels) => {
  const mapOffers = new Map();
  cities.forEach((city) => {
    mapOffers.set(city, HotelsInCity[city.toUpperCase()](favoriteHotels));
  });
  return mapOffers;
};

const FavoriteList = ({ favoriteHotels }) => {
  const favoriteOffers = generateFavoriteOffers(favoriteHotels);
  return (
    <ul className="favorites__list">
      {cities.map((city, i) => {
        if (favoriteOffers.get(city).length) {
          return (
            <FavoriteItem
              hotels={favoriteOffers.get(city)}
              city={city}
              key={`favorite-${i}`}
            />
          );
        }
      })}
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
