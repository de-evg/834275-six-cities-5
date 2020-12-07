import React from "react";
import PropTypes from "prop-types";
import PlacesItem from "../places-item/places-item";

const PlacesList = ({places}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        places.map((place, i) => <PlacesItem place={place} key={`place-${i}`} />)
      }
    </div>
  );
};

PlacesList.propTypes = {
  places: PropTypes.array.isRequired
};

export default PlacesList;
