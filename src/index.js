import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';
import configureStore from './store';
import { Provider } from 'react-redux';

const store = configureStore();

render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('root')
);