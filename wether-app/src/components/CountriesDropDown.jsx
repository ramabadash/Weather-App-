import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  reset,
  fetchWeatherSuccess,
  fetchWeatherFail,
} from '../actions/weatherActions';
// Style
import '../styles/CountriesDropDown.css';

function CountriesDropDown() {
  /***** STATE *****/
  const [country, setCountry] = useState('');
  const countriesNames = useSelector(state => state.countries);

  /***** FUNCTIONS ******/
  // Dispatch
  const dispatch = useDispatch();

  // Async Fetch weather request
  const fetchWeather = () => {
    return dispatch => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${country.toLocaleLowerCase()}&appid=d00f1c8526b61b691dc7eb25cf19e05c`
        )
        .then(({ data }) => {
          dispatch(fetchWeatherSuccess(data.list, country, data.city.country));
        })
        .catch(error => {
          dispatch(fetchWeatherFail(error.response.data.message));
        });
    };
  };

  // Clear country state and reset the state
  const handleClear = () => {
    setCountry('');
    dispatch(reset());
  };

  return (
    <div className='search-container'>
      <input
        className='search-input'
        placeholder='Enter city name'
        value={country}
        type='text'
        list='countries'
        onChange={e => {
          setCountry(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(fetchWeather());
        }}
        className='search-btn'
      >
        Show me the weather!
      </button>
      <button className='clear-btn' onClick={handleClear}>
        Clear
      </button>

      <datalist id='countries'>
        {countriesNames.map((item, index) => (
          <option key={index} value={item} />
        ))}
      </datalist>
    </div>
  );
}

export default CountriesDropDown;
