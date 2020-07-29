import React, { useEffect, useReducer } from "react";
import Weather from './Weather'
import '../../src/App.css'

const weatherUrl =
  // "http://api.weatherapi.com/v1/current.json?key=ce12d95b27ae402395370111202907&q=London";
  "http://api.weatherapi.com/v1/forecast.json?key=ce12d95b27ae402395370111202907&q=London&days=3";


  const initialState = {
    loading: true,
    location: [],
    currentWeather: [],
    errorMessage: null,
  }

  const reducer = (state, action) => {
    switch(action.type){
      case 'forecast_loading':
      return {
        ...state,
        loading: true,
        errorMessage: null,
      }
      case 'forecast_success':
      return {
        ...state,
        loading: false,
        location: action.payload,
        currentWeather: action.currentWeather

      }
      case 'forecast_failed':
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      }
      default:
      return state;
    }
  }
  
  function App() {

    const [state, dispatch] = useReducer(reducer, initialState);

      useEffect(() => {
        fetch(weatherUrl)
          .then((response) => response.json())
          .then((jsonResponse) => {
              dispatch({
                type:'forecast_success',
                payload: jsonResponse.location,
                currentWeather: jsonResponse.current
              })
            // console.log('current',jsonResponse.current);
            // console.log('location',jsonResponse.location);

            console.log('generic',jsonResponse)
          })
      }, [])

      const { location, errorMessage, loading, currentWeather } = state;
      // console.log('location',location)
      // console.log('current',currentWeather)


      return (
        <div className="App">
          {loading && !errorMessage?(
            <span>loading...</span>
          ) : errorMessage ? (
            <div>{errorMessage}</div>
          ) : (
          <Weather location={location} currentWeather={currentWeather} />

        )}
          
        </div>
      )
    };

export default App
