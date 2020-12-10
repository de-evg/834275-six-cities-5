export const getCitiesCoords = (offers) => {
  const cites = new Set();
  const mapCoords = new Map();
  const coords = offers.forEach((offer) => {
    cites.add(offer.city.name);
  });
  cites.forEach((city) => {
    const offer = offers.find((offer) => city === offer.city.name);
    mapCoords.set(city, offer.city.location);
  });

  return mapCoords;
};
