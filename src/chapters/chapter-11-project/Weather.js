import React from "react";
import "./weather.styles.css";

const Weather = () => {
  return (
    <div>
      <header>
        <h1>The Super Awesome Weather App</h1>
      </header>
      <div className="main">
        <div id="search">
          <label htmlFor="city">City Name</label>
          <input type="text" id="city"></input>
          <button type="button">Show Weather!</button>
        </div>
        <div id="load">Loading...</div>
        <div id="weather">
          <h1 id="weatherCity">City Name</h1>

          <div id="weatherDescription">Weather Description</div>
          <div id="weatherTemperature">Temperature</div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
