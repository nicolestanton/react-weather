import React from "react";

export function CurrentWeather({ location, currentWeather, forecast }) {
  const currentCondition = currentWeather && currentWeather.condition;
  const weatherIcon =
    forecast &&
    forecast[0] &&
    forecast[0].day &&
    forecast[0].day.condition &&
    forecast[0].day.condition.icon;

  const lastUpdate = currentWeather.last_updated;
  const updateTime = lastUpdate && lastUpdate.split(" ")[1];

  console.log({ currentWeather, location, forecast });

  return (
    <div className="current-weather">
      <div className="location-data">
        <span>Current Weather:</span>
        <h2>{location.name}</h2>
        <span>{currentWeather.last_updated}</span>
      </div>

      <div className="current-temp">
        <img className="icon" src={weatherIcon} alt="weather-icon" />
        <span className="temp">{currentWeather.temp_c}°C</span>

        {currentCondition && (
          <span className="condition">{currentCondition.text}</span>
        )}

        <div className="data">
          <div className="data-row">
            <div className="row feel-like">
              <span className="title">Feels like:</span>
              <span>{currentWeather.feelslike_c}°</span>
            </div>
            <span className="seperator"></span>
            <div className="row updated-at">
              <span className="title">Last Updated:</span>
              <span>{updateTime}</span>
            </div>
          </div>
          <div className="data-row">
            <div className="row uv">
              <span className="title">UV:</span>
              <span>{currentWeather.uv}</span>
            </div>
            <span className="seperator"></span>

            <div className="row wind">
              <span className="title">Wind:</span>
              <span>{currentWeather.wind_mph} mph</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
