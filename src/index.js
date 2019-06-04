import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store, configureFakeBackend } from './helpers'
import './index.css'
import './i18n'
import ThemeProvider from './components/ThemeProvider'
import App from './App'

// setup fake backend
!process.env.REACT_APP_API_URL && configureFakeBackend()

ReactDOM.render(
  <Suspense fallback="loading">
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </Suspense>,
  document.getElementById('root')
)
