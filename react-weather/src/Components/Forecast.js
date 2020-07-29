import React from 'react';

export function Forecast({ forecast }){

    return(
        <React.Fragment>
            <div className='weather-forecast'>
                <span className='weather-forecast_day'>{forecast.date}</span>
                <span className='weather-forecast_temp'>{forecast.day.avgtemp_c}°C</span>
            </div>
        </React.Fragment>
    )
}

export default Forecast;