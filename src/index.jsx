import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './containers/App';
import configureStore from './configureStore';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {};
const store = configureStore(initialState);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
