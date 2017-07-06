import axios from 'axios';

const API_KEY = 'b084b892a87de013136f288c0fb80543';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// action creator
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // axios returns a promise
  // pass into action as the payload

  // console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}