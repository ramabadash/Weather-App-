import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function CountriesDropDown() {
  /***** STATE *****/
  const [country, setCountry] = useState('');
  const countriesNames = useSelector(state => state.countries);

  /***** FUNCTIONS ******/
  const handleSubmit = () => {
    console.log(country);
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
      <button onClick={handleSubmit}>Submit</button>
      <button
        onClick={() => {
          setCountry('');
        }}
      >
        Clear
      </button>

      <datalist id='countries'>
        {countriesNames.map(item => (
          <option key={item} value={item} />
        ))}
      </datalist>
    </div>
  );
}

export default CountriesDropDown;
