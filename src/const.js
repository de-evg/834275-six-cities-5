export const appRoute = {
  MAIN: `/`,
  SIGN_IN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const APIRoute = {
  LOGIN: `/login`,
  COMMENTS: (id) => `/comments/${id}`,
  FAVORITE: (id) => `/favorite/${id}`,
  HOTEL: (id) => `/hotels/${id}`,
  HOTELS: `/hotels`,
  NEARBY: (id) => `/hotels/${id}/nearby`,
};

export const cities = [
  `Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`
];

export const DEFAULT_ACTIVE_FILTER = `Paris`;
export const DEFAULT_ACTIVE_SORT = `POPULAR`;

export const RoomType = {
  APARTMENT: `Apratment`,
  ROOM: `Private Room`,
  HOUSE: `House`,
  HOTEL: `Hotel`
};

export const SortType = {
  POPULAR: `Popular`,
  LOW_TO_HIGHT: `Price: low to high`,
  HIGHT_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`,
};
