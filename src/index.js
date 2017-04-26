import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ons from 'onsenui';

ons.ready(function() {
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    );
});
