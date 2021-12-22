const reset = () => {
  return {
    type: 'RESET',
  };
};

const fetchWeatherSuccess = (data, country, countryCode) => {
  return {
    type: 'FETCH_WEATHER_SUCCESS',
    payload: { data, country, countryCode },
  };
};

const fetchWeatherFail = error => {
  return {
    type: 'FETCH_WEATHER_FAIL',
    payload: { error },
  };
};

export { reset, fetchWeatherSuccess, fetchWeatherFail };
