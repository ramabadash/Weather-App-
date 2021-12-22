import React from 'react';
import { useSelector } from 'react-redux';

function WeatherList() {
  /***** STATE *****/
  const fiveDaysWeather = useSelector(state => state.weatherData);
  const country = useSelector(state => state.country);

  return (
    <div>
      <h1>{country}</h1>
      {fiveDaysWeather.length < 1 ? (
        <p>Choose a country</p>
      ) : (
        fiveDaysWeather.map(dayData => {
          return (
            <div key={dayData.dt} className='weather-day'>
              <h3>{dayData['dt_txt']}</h3>
              <h4>{dayData.weather[0].main}</h4>
              <img
                alt='weather-icon'
                src={`http://openweathermap.org/img/wn/${dayData.weather[0].icon}@2x.png`}
              />
              <div>
                <span>Temp: {Math.floor(dayData.main.temp - 273.15)} °C</span>{' '}
                <span>
                  Feels like: {Math.floor(dayData.main['feels_like'] - 273.15)}{' '}
                  °C
                </span>
              </div>
              <div>
                <span>Wind speed: {Math.floor(dayData.wind.speed)} </span>{' '}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default WeatherList;
