export const appRoute = {
  MAIN: `/`,
  SIGN_IN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/:id`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const APIRoute = {
  LOGIN: `/login`,
  COMMENTS: (id) => `/comments/${id}`,
  FAVORITE: `/favorite`,
  HOTEL: (id) => `/hotels/${id}`,
  HOTELS: `/hotels`,
  NEARBY: (id) => `/hotels/${id}/nearby`,
};

export const cities = [
  `Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`
];

export const RoomType = {
  APARTMENT: `Apratment`,
  ROOM: `Private Room`,
  HOUSE: `House`,
  HOTEL: `Hotel`
};
