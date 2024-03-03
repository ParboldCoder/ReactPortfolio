import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app.jsx';
import './css/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  true ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : null
);