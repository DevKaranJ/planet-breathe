import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom'
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')); // Use createRoot to create a root instance

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);

reportWebVitals();
