import Weather from "./weather";


describe('weather', () => {
  describe('fromJson', () => {
    it('should create correct instance from json', () => {
      const weather = Weather.fromJson(jsonMock);
      expect(weather.lat).toBe(jsonMock.coord.lat);
      expect(weather.lon).toBe(jsonMock.coord.lon);
      expect(weather.weather).toBe(jsonMock.weather[0].main);
      expect(weather.weatherDescription).toBe(jsonMock.weather[0].description);
      expect(weather.weatherIcon).toBe(jsonMock.weather[0].icon);
      expect(weather.temperature).toBe(jsonMock.main.temp);
      expect(weather.humidity).toBe(jsonMock.main.humidity);
      expect(weather.minTemperature).toBe(jsonMock.main.temp_min);
      expect(weather.maxTemperature).toBe(jsonMock.main.temp_max);
      expect(weather.city).toBe(jsonMock.name);
    });
  });
});

const jsonMock = {
  "coord": {
    "lon": 51.51,
    "lat": -0.13
  },
  "weather": [
    {
      "id": 804,
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 298.282,
    "pressure": 1009.5,
    "humidity": 92,
    "temp_min": 298.282,
    "temp_max": 298.282,
    "sea_level": 1009.5,
    "grnd_level": 1009.48
  },
  "wind": {
    "speed": 6.8,
    "deg": 233.892
  },
  "clouds": {
    "all": 95
  },
  "dt": 1562285285,
  "sys": {
    "message": 0.0076,
    "sunrise": 1562294093,
    "sunset": 1562337699
  },
  "timezone": 10800,
  "id": 0,
  "name": "",
  "cod": 200
};