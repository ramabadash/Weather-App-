import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
// Style
import '../styles/WeatherList.css';

function WeatherList() {
  /***** STATE *****/
  const fiveDaysWeather = useSelector(state => state.weatherData);
  const country = useSelector(state => state.country);
  const countryCode = useSelector(state => state.countryCode);
  const daysArr = ['TODAY', 'TOMORROW', 'IN 2 DAYS', 'IN 3 DAYS', 'IN 4 DAYS'];

  return (
    <div className='weather-container'>
      <h1>{country}</h1>
      {countryCode ? (
        <img
          alt='fleg'
          src={`https://flagcdn.com/28x21/${countryCode.toLowerCase()}.png`}
        />
      ) : (
        ''
      )}
      {fiveDaysWeather.length < 1 ? (
        <p>Choose a country</p>
      ) : (
        <div className='days-container'>
          {fiveDaysWeather.map((dayData, i) => {
            return (
              <div key={dayData.dt} className='weather-day'>
                <h3>{daysArr[i]}</h3>
                <h3>{moment(dayData['dt_txt']).format('lll')}</h3>
                <h4>{dayData.weather[0].main}</h4>
                <img
                  alt='weather-icon'
                  src={`http://openweathermap.org/img/wn/${dayData.weather[0].icon}@2x.png`}
                />
                <div>
                  <p>
                    Temp:{' '}
                    <strong>{Math.floor(dayData.main.temp - 273.15)} °C</strong>
                  </p>{' '}
                  <p>
                    Feels like:{' '}
                    <strong>
                      {Math.floor(dayData.main['feels_like'] - 273.15)} °C
                    </strong>
                  </p>
                </div>
                <div>
                  <span>
                    Wind speed:{' '}
                    <strong>{Math.floor(dayData.wind.speed)} Knot</strong>{' '}
                  </span>{' '}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default WeatherList;
