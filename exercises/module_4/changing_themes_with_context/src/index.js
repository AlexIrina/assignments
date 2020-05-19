import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import { ThemeContextProvider } from './components/themeContext';

ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById('root')
);
