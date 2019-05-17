import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './helpers';
import './index.css';
import './i18n';
import App from './App';

// setup fake backend
import { configureFakeBackend } from './helpers';
configureFakeBackend();

ReactDOM.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById('root')
);
