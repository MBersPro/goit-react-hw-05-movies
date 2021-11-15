import axios from "axios";

const KEY = "f596e2fa9e8653b077765440a18b784b";
const BASE = "https://api.themoviedb.org/3/";

export const apiTrends = () => {
  return axios(`${BASE}trending/movie/day?api_key=${KEY}`).then(
    (response) => response.data.results
  );
};

export const apiSearch = (query) => {
  return axios(
    `${BASE}search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=true`
  ).then((response) => response.data.results);
};

export const detailedInfo = (movieId) => {
  return axios(`${BASE}movie/${movieId}?api_key=${KEY}&language=en-US}`).then(
    (response) => response.data
  );
};

export const castApi = (movieId) => {
  return axios(
    `${BASE}movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  )
};

export const rewiewApi = (movieId) => {
  return axios(
    `${BASE}movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  )
};
//.then((response) => response.cast);