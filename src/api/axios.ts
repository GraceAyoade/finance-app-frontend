import axios from "axios";
// import { json } from "stream/consumers";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const axiosPrivate = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  function (response) {
    console.log("axiosInterceptors", response);
    if (response.config.url === "/auth/logIn") {
      localStorage.setItem(
        "authToken",
        JSON.stringify(response.data.data.authToken)
      );
    }
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

axiosPrivate.interceptors.request.use(
  function (config) {
    const authToken = localStorage.getItem("authToken")
    console.log("axiosInterceptors", config);
    if (authToken) {
        config.headers.authorization = `Bearer ${authToken}`
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
