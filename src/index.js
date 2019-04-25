import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ContextProvider } from './context';
import './i18n';
import App from './App';

ReactDOM.render(
  <Suspense fallback="loading">
    <ContextProvider>
      <App />
    </ContextProvider>
  </Suspense>,
  document.getElementById('root')
);
