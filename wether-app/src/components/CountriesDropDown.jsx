import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  reset,
  fetchWeatherSuccess,
  fetchWeatherFail,
} from '../actions/weatherActions';

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
          dispatch(fetchWeatherSuccess(data.list, country));
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
    <div>
      <input
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
      >
        Submit
      </button>
      <button onClick={handleClear}>Clear</button>

      <datalist id='countries'>
        {countriesNames.map(item => (
          <option key={item} value={item} />
        ))}
      </datalist>
    </div>
  );
}

export default CountriesDropDown;
