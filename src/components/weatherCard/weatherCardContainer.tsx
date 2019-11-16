import { getWeatherByCoordinates } from "../../services/weatherData/api";
import WeatherCard from './weatherCard';
import React from 'react';
import Weather from "../../services/weatherData/models/weather";

interface Props { };
interface State {
  isLoading: boolean;
  weather: Weather | undefined;
}

export default class WeatherCardContainer extends React.Component<Props, State> {
  state = {
    isLoading: true,
    weather: undefined,
  };

  componentDidMount() {
    // add delay inorder to show spinner
    setTimeout(() => {
      if (!navigator.geolocation) {
        console.log('geolocation not supported');
        return;
      }
      navigator.geolocation.getCurrentPosition(async (position) => {
        const weather = await getWeatherByCoordinates({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        this.setState({
          isLoading: false,
          weather,
        });
      }, (error) => {
        console.log('error');
      });
    }, 1000);
  }

  render() {
    const { isLoading, weather } = this.state;
    return (
      <WeatherCard isLoading={isLoading} weather={weather} />
    );
  }
} 