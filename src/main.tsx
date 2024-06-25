import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './Pages/HomePage';
import "./lib/i18n";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
)
