import axios from "axios";

const BACKEND_URL = `https://5.react.pages.academy/six-cities`;
const REQUST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  INTERNAL_SERVER: 500,
};

const createApi = (onUnauthorized, onBadRequest) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const response = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
      throw err;
    }

    if (response.status === HttpCode.onBadRequest) {
      onBadRequest();
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export { createApi };
