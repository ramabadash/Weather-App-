import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../actions/weatherActions';

function CountriesDropDown() {
  /***** STATE *****/
  const [country, setCountry] = useState('');
  const countriesNames = useSelector(state => state.countries);

  /***** FUNCTIONS ******/
  //
  const dispatch = useDispatch();
  //
  const handleSubmit = () => {
    console.log(country);
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
      <button onClick={handleSubmit}>Submit</button>
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
