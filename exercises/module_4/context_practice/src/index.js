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
 * Challenge: Set up context to save the user's username and pass it to anywhere that is currently hardcoding "Username".
 *
 * Use the static class property `contextType` on any components that need to consume context.
 */
