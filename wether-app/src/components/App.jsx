import React from 'react';
import CountriesDropDown from './CountriesDropDown';
import WeatherList from './WeatherList';

function App() {
  return (
    <div>
      <h1>What is the weather?</h1>
      <CountriesDropDown />
      <WeatherList />
    </div>
  );
}

export default App;
