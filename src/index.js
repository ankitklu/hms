import React from 'react';
import { render } from 'react-dom';
import './components/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import store from './store';

const root = document.getElementById('root');

render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-mtato7ha67sdkpcx.us.auth0.com"
      clientId="1Jcr4N58JPgbKm8zaP0yidwDAfVenRfV"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
