import React, { useEffect, useReducer } from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";

import "../../src/App.css";

const weatherUrl =
  "http://api.weatherapi.com/v1/forecast.json?key=ce12d95b27ae402395370111202907&q=London&days=3";

const initialState = {
  loading: true,
  location: [],
  currentWeather: [],
  errorMessage: null,
  forecast: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "forecast_loading":
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case "forecast_success":
      return {
        ...state,
        loading: false,
        location: action.payload,
        currentWeather: action.currentWeather,
        forecast: action.forecast.forecastday,
      };
    case "forecast_failed":
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(weatherUrl)
      .then((response) => response.json())
      .then((jsonResponse) => {
        dispatch({
          type: "forecast_success",
          payload: jsonResponse.location,
          currentWeather: jsonResponse.current,
          forecast: jsonResponse.forecast,
        });

        console.log("generic", jsonResponse);
      });
  }, []);

  const { location, errorMessage, loading, currentWeather, forecast } = state;

  return (
    <div className="App">
      <Weather location={location} currentWeather={currentWeather} />
      <h2>Here's your 3 day forecast:</h2>
      <div className="forecast">
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
