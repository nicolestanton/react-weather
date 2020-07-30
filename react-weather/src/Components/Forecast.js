import React from "react";

export function Forecast({ forecast }) {
  const epochTimestamp = forecast.date_epoch;
  const displayDate = new Date(); // The 0 there is the key, which sets the date to the epoch
  displayDate.setUTCSeconds(epochTimestamp);
  const dayName = displayDate.toString().split(" ")[0];
  const date = displayDate.toString().split(" ")[1];
  const month = displayDate.toString().split(" ")[2];

  return (
    <React.Fragment>
      <div className="weather-forecast">
        <span className="weather-forecast_day">{`${dayName} ${date} ${month}`}</span>
        <span className="weather-forecast_temp">
          {forecast.day.avgtemp_c}°C
        </span>
      </div>
    </React.Fragment>
  );
}

export default Forecast;
