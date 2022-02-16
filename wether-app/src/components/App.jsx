import React, { useEffect } from 'react';
import CountriesDropDown from './CountriesDropDown';
import WeatherList from './WeatherList';
import { useSelector, useDispatch } from 'react-redux';
// Pop Up messages
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Style
import '../styles/App.css';

function App() {
  /***** STETS *****/
  const errorMessage = useSelector(state => state.error);

  /***** FUNCTIONS *****/
  const notify = message =>
    toast.error(`${message}`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  // Dispatch
  const dispatch = useDispatch();

  /***** EFFECT *****/
  useEffect(() => {
    if (errorMessage) {
      notify(errorMessage);
      dispatch({ type: 'RESET' });
    } else {
      return;
    }
  }, [errorMessage]);

  return (
    <div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1>
        What is the weather? <i className='fas fa-cloud-sun'></i>
      </h1>

      <CountriesDropDown />
      <WeatherList />
    </div>
  );
}

export default App;
