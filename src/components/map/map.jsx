import React, { useEffect } from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {getCitiesCoords} from "../../utils/common";
import "leaflet/dist/leaflet.css";
import {connect} from "react-redux";

const Map = ({ offers, activeFilter }) => {

const citiesCoords = getCitiesCoords(offers);
  const icon = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30],
  });
  const city = [citiesCoords.get(activeFilter).latitude, citiesCoords.get(activeFilter).longitude]
  const zoom = citiesCoords.get(activeFilter).zoom;

  useEffect(() => {
    let map = leaflet.map(`map`, {
      center: city,
      zoom: zoom,
      zoomControl: false,
      marker: true,
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      )
      .addTo(map);
    
    const offerCords = [52.3709553943508, 4.89309666406198];
    offers.filter((offer) => offer.city.name === activeFilter)
      .forEach(filteredOffer => {
        const {latitude, longitude} = filteredOffer.location;
        leaflet.marker([latitude, longitude], { icon }).addTo(map);
      });
    return () => map.remove();
  });

  return <div id="map"></div>;
};

Map.propTypes = {
  offers: PropTypes.array.isRequired,
  activeFilter: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.HOTELS.hotels,
  activeFilter: state.HOTELS.activeFilter
});

export default connect(mapStateToProps)(Map);
