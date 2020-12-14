import React from "react";
import PropTypes from "prop-types";

const MAX_IMAGES = 6;

const Gallery = ({images, type}) => {
  return (
    <div className="property__gallery">
      {images.slice(0, MAX_IMAGES).map((imageSrc, i) => (
        <div className="property__image-wrapper" key={`offerImg-${i}`}>
          <img
            className="property__image"
            src={imageSrc}
            alt={`Photo ${type}`}
          />
        </div>
      ))}
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired
};

export default Gallery;
