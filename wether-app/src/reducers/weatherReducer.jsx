import { countriesNames } from '../data/countriesNames';

export const primaryState = {
  countries: countriesNames,
  country: '',
  weatherData: {},
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
      console.log('list', fiveDaysWeather);
      return {
        ...primaryState,
        country: payload.country,
        weatherData: fiveDaysWeather,
      };
    case 'FETCH_WEATHER_FAIL':
      console.log('error', payload.error);
      return { ...primaryState, error: payload.error };
    default:
      return state;
  }
};

export default weatherReducer;
