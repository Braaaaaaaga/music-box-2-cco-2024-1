import App from './App';
import React from 'react';
import "./utils/globals.js";
import "./utils/globals.css";
import ReactDOM from 'react-dom/client';
const root =
  ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);