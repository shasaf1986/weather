import getWeatherByCoordinates from "./getWeatherByCoordinates";

describe('getWeatherByCoordinates', () => {
  it('should get connect', async () => {
    await getWeatherByCoordinates({
      lat: -0.13,
      lon: 51.51,
    });
  });
});