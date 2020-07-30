import React from "react";

export function Weather({ location, currentWeather }) {
  return (
    <div className="current-weather_container">
      <h1>The current weather in {location.name} is:</h1>
      {/* <img src={condition.icon} alt="weather-icon" />
      <span className="current-weather_condition">
        {condition.text}
      </span> */}
      <span className="current-weather_temp">{currentWeather.temp_c}°C</span>
      <span className="current-weather_feeling">
        Feels like:{currentWeather.feelslike_c}°C
      </span>
    </div>
  );
}

export default Weather;
