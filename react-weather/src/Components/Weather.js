import React from 'react';

export function Weather({location, currentWeather}){

    return(
        <div>
            <span>{location.name}</span>
            <span>{currentWeather.condition.text}</span>
            <span>{currentWeather.temp_c}</span>

        </div>
    )
}

export default Weather;