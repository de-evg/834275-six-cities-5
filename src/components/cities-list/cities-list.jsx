import React from "react";
import CitiesItem from "../cities-item/cities-item";
import { cities } from "../../const";

const CitiesList = () => {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, i) => (
        <CitiesItem city={city} key={`city-${i}`} />
      ))}
    </ul>
  );
};

export default CitiesList;
