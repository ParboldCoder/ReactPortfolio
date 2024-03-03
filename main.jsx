import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import './css/style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

ReactDOM.createRoot(document.getElementById('root')).render(
  true ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : null
);