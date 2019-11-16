interface Options {
  lat: number;
  lon: number;
  temperature: number;
  minTemperature: number;
  maxTemperature: number;
  humidity: number;
  city: string | undefined;
  weather: string;
  weatherDescription: string;
  weatherIcon: string;
  windSpeed: number;
  windDegree: number;
}

export default class Weather implements Options {
  readonly lat: number;
  readonly lon: number;
  readonly temperature: number;
  readonly minTemperature: number;
  readonly maxTemperature: number;
  readonly humidity: number;
  readonly city: string | undefined;
  readonly weather: string;
  readonly weatherDescription: string;
  readonly weatherIcon: string;
  readonly windSpeed: number;
  readonly windDegree: number;

  constructor(options: Options) {
    this.lat = options.lat;
    this.lon = options.lon;
    this.temperature = options.temperature;
    this.minTemperature = options.minTemperature;
    this.maxTemperature = options.maxTemperature;
    this.humidity = options.humidity;
    this.weather = options.weather;
    this.weatherDescription = options.weatherDescription;
    this.weatherIcon = options.weatherIcon;
    this.windSpeed = options.windDegree;
    this.windDegree = options.windDegree;
    this.city = options.city;
  }

  static fromJson(json: any) {
    const { coord, weather, main, wind, name } = json;
    return new Weather({
      lat: coord.lat,
      lon: coord.lon,
      weather: weather[0].main,
      weatherDescription: weather[0].description,
      weatherIcon: weather[0].icon,
      city: name,
      windSpeed: wind.speed,
      windDegree: wind.deg,
      humidity: main.humidity,
      temperature: main.temp,
      minTemperature: main.temp_min,
      maxTemperature: main.temp_max,
    });
  }
}
