import axios from 'axios';
import Weather from '../models/weather';

export default async function getWeather(params: any = {}) {
  const effectiveParams = {
    'APPID': process.env.REACT_APP_OPEN_WEATHER_KEY,
    ...params,
  };
  const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: effectiveParams,
  });
  return Weather.fromJson(response.data);
}