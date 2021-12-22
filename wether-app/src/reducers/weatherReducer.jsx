import { countriesNames } from '../data/countriesNames';

export const primaryState = {
  countries: countriesNames,
  country: '',
  weatherData: {},
};

const weatherReducer = (state = primaryState, { type }) => {
  switch (type) {
    case 'SEARCH_WEATHER':
      return state;
    default:
      return state;
  }
};

export default weatherReducer;
