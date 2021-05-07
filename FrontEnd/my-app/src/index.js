import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import axios from 'axios';
//import * as serviceWorker from "./serviceWorker";
//import reportWebVitals from './reportWebVitals';

axios.defaults.baseURL = 'http://localhost:8081/';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);