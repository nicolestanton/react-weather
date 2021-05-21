import React from "react";

export function Forecast({ forecast }) {
  console.log("forecast component", forecast);
  const epochTimestamp = forecast.date_epoch;
  const displayDate = new Date(); // The 0 there is the key, which sets the date to the epoch
  displayDate.setUTCSeconds(epochTimestamp);
  const dayName = displayDate.toString().split(" ")[0];

  return (
    <React.Fragment>
      <div className="forecast-item">
        <span className="day">{dayName}</span>
        <div>
          <span className="avg-temp">
            {Math.round(forecast.day.avgtemp_c)}°
          </span>
          <span className="min-temp">
            {Math.round(forecast.day.mintemp_c)}°
          </span>
        </div>
        <img
          className="icon"
          src={forecast.day.condition.icon}
          alt={forecast.day.condition.text}
        />
        <span className="condition">{forecast.day.condition.text}</span>
      </div>
    </React.Fragment>
  );
}

export default Forecast;
