import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const userName = 'Alex';
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>You're going to an awesome engineer {userName}! </p>
      </header>
    </div>
  );
}

export default App;
