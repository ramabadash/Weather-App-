import { countriesNames } from '../data/countriesNames';

export const primaryState = {
  countries: countriesNames,
  country: '',
  weatherData: [],
  error: '',
};

const weatherReducer = (state = primaryState, { type, payload }) => {
  switch (type) {
    case 'RESET':
      return primaryState;
    case 'FETCH_WEATHER_SUCCESS':
      const fiveDaysWeather = [
        payload.data[0],
        payload.data[8],
        payload.data[16],
        payload.data[24],
        payload.data[36],
      ];
      return {
        ...primaryState,
        country: payload.country,
        weatherData: fiveDaysWeather,
      };
    case 'FETCH_WEATHER_FAIL':
      return { ...primaryState, error: payload.error };
    default:
      return state;
  }
};

export default weatherReducer;
