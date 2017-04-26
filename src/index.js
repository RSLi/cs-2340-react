import React from 'react';
import ReactDOM from 'react-dom';
import MyNavigator from './MyNavigator.js';
import './index.css';
import '../node_modules/onsenui/css/onsenui.css';
import '../node_modules/onsenui/css/onsen-css-components.css';
import ons from 'onsenui';

ons.ready(function() {
    ReactDOM.render(
      <MyNavigator />,
      document.getElementById('root')
    );
});
