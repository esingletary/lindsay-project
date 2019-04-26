export default class WeatherService {
  WEATHER_API = 'https://api.weather.gov/points/';

  async getWeather(coords) {
    const full_url = this.WEATHER_API + coords + "/forecast";
    let response = await (await fetch(full_url, { mode: "cors" })).json();
    return response.properties.periods.slice(0, 4);
  }
}
