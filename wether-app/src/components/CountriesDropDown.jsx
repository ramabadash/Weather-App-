import React from 'react';
import { cityNames } from '../data/cityName';

function CountriesDropDown() {
  return (
    <div>
      <input type='text' list='countries' />

      <datalist id='countries'>
        {cityNames.map(item => (
          <option key={item} value={item} />
        ))}
      </datalist>
    </div>
  );
}

export default CountriesDropDown;
