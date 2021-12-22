const reset = () => {
  return {
    type: 'RESET',
  };
};

const fetchWeatherSuccess = (data, country) => {
  return {
    type: 'FETCH_WEATHER_SUCCESS',
    payload: { data, country },
  };
};

const fetchWeatherFail = error => {
  return {
    type: 'FETCH_WEATHER_FAIL',
    payload: { error },
  };
};

export { reset, fetchWeatherSuccess, fetchWeatherFail };
