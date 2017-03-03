import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';

export function fetchWeather(city) {
  console.log('search')
  return {
    type: FETCH_DATA,
    payload: axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=3e3284eaa0c7e6d2c0e05835606a37e9`)
  }
}
