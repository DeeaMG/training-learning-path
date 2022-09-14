class WeatherData {
  constructor(cityName, description) {
    this.cityName = cityName;
    this.description = description;
    this.temperature = "";
  }
}

export default WeatherData;
export const WeatherDataProxy = {
  get: function (target, property) {
    return Reflect.get(target, property);
  },
  set: function (target, property, value) {
    return Reflect.set(target, property, value);
  },
};
