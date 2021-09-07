import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(//inserting the app whithin the root
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')// this is using dom to modify the html by the root class
);
reportWebVitals();
