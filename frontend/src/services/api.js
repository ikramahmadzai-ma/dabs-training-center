import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

let setLoadingFunction = null;

export const registerLoading = (fn) => {
  setLoadingFunction = fn;
};

api.interceptors.request.use(
  (config) => {

    if (setLoadingFunction) {
      setLoadingFunction(true);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {

    if (setLoadingFunction) {
      setLoadingFunction(false);
    }

    return response;
  },
  (error) => {

    if (setLoadingFunction) {
      setLoadingFunction(false);
    }

    return Promise.reject(error);
  }
);

export default api;