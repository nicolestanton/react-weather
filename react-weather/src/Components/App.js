import React, { useEffect, useReducer } from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

import "../../src/Styles/App.scss";

const weatherUrl =
  "http://api.weatherapi.com/v1/forecast.json?key=ce12d95b27ae402395370111202907&q=London&days=7&forecastday=astro";

const initialState = {
  loading: true,
  location: [],
  currentWeather: [],
  errorMessage: null,
  forecast: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "forecast_loading":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "forecast_success":
      return {
        ...state,
        loading: false,
        location: action.payload,
        currentWeather: action.currentWeather,
        forecast: action.forecast.forecastday
      };
    case "forecast_failed":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(weatherUrl)
      .then(response => response.json())
      .then(jsonResponse => {
        dispatch({
          type: "forecast_success",
          payload: jsonResponse.location,
          currentWeather: jsonResponse.current,
          forecast: jsonResponse.forecast
        });

        console.log("generic", jsonResponse);
      });
  }, []);

  const { location, errorMessage, loading, currentWeather, forecast } = state;

  return (
    <div className="App">
      <CurrentWeather
        location={location}
        currentWeather={currentWeather}
        forecast={forecast}
      />
      <div className="forecast">
        <h2>This Week</h2>
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          forecast.map((forecast, index) => (
            <Forecast key={`${index}`} forecast={forecast} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
