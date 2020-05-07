import React from 'react';
import ReactDOM from 'react-dom';
import UserContext from './userContext';
import App from './App';
import './App.css';
ReactDOM.render(
  <UserContext.Provider value='Alex'>
    <App />
  </UserContext.Provider>,
  document.getElementById('root')
);

/**
 * Challenge:
 *
 * 1. Convert App and Header back into functional components
 * 2. Use UserContext.Consumer to consume the username context in both places
 */
