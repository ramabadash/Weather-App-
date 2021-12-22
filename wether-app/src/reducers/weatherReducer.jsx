import { citiesNames } from '../data/citiesNames';

export const primaryState = {
  countries: citiesNames,
  country: '',
  countryCode: '',
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
        countryCode: payload.countryCode,
        weatherData: fiveDaysWeather,
      };
    case 'FETCH_WEATHER_FAIL':
      return { ...primaryState, error: payload.error };
    default:
      return state;
  }
};

export default weatherReducer;
