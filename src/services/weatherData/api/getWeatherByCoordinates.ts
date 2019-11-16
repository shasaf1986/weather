import getWeather from "./getWeather";

interface Options {
  lat: number;
  lon: number;
}
export default function getWeatherByCoordinates(options: Options) {
  const params = {
    ...options,
    units: 'metric',
  };
  return getWeather(params);
}
