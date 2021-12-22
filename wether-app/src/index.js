import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <App />
    </Provider> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
