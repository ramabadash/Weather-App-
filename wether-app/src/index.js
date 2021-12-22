import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import weatherReducer from './reducers/weatherReducer';
import thunkMiddleWare from 'redux-thunk';
import App from './components/App';

const store = createStore(weatherReducer, applyMiddleware(thunkMiddleWare));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
