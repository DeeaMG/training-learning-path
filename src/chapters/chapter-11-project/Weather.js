import React, { useState } from "react";
import ApiRequest from "./API-request";
import WeatherData, { WeatherDataProxy } from "./weather-data";
import "./weather.styles.css";

const Weather = () => {
  const [cityName, setCityName] = useState("");
  const [description, setDescription] = useState("");
  const [temperature, setTemperature] = useState("");
  const [isWeather, setIsWeather] = useState(false);
  const ApiKey = "c18af71b180e33ed33e355a497036f65";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ApiKey}&units=metric`;

  const onClickHandler = (event) => {
    event.preventDefault();

    if (!cityName.length) {
      alert("Please enter a city name.");
    } else
      ApiRequest.fetchData(URL)
        .then((responseData) => {
          const data = new WeatherData(cityName, responseData.weather[0].description);
          const proxy = new Proxy(data, WeatherDataProxy);
          proxy.temperature = responseData.main.temp;
          setDescription(data.description);
          setTemperature(data.temperature);
          setIsWeather(true);
        })
        .catch((error) => console.log(error));
  };

  const handleChange = (event) => {
    setCityName(event.target.value.trim());
    console.log(event.target.value);
  };

  return (
    <div>
      <header>
        <h1>The Super Awesome Weather App</h1>
      </header>
      <div className="main">
        <div id="search">
          <label htmlFor="city">City Name</label>
          <input type="text" name="City" id="city" onChange={handleChange} value={cityName}></input>
          <button type="button" onClick={onClickHandler}>
            Show Weather!
          </button>
        </div>
        {isWeather ? (
          <div id="weather">
            <h1 id="weatherCity">{cityName}</h1>
            <div id="weatherDescription">{description}</div>
            <div id="weatherTemperature">{temperature} °C</div>
          </div>
        ) : (
          <div id="load">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Weather;
