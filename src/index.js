import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import './i18next';
import {ImSpinner} from "react-icons/all";

ReactDOM.render (
  <React.StrictMode>
      <Router>
          <Suspense fallback={(<div className='loader'><ImSpinner className='spinner'/></div>)}>
              <App />
          </Suspense>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


