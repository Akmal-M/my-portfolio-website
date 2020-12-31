import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <ParallaxProvider>
              <App />
          </ParallaxProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


