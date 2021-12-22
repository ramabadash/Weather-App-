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
          console.log(dayData);
          return (
            <div key={dayData.dt} className='weather-day'>
              <h3>{dayData['dt_txt']}</h3>
              <div>
                <span>temp: {Math.floor(dayData.main.temp - 273.15)} deg</span>{' '}
                <span>
                  feels like: {Math.floor(dayData.main['feels_like'] - 273.15)}{' '}
                  deg
                </span>
              </div>
              <div>
                <span>Wind speed: {Math.floor(dayData.wind.speed)} </span>{' '}
              </div>
              <img
                alt='weather-icon'
                src={`http://openweathermap.org/img/wn/${dayData.weather[0].icon}@2x.png`}
              />
            </div>
          );
        })
      )}
    </div>
  );
}

export default WeatherList;
