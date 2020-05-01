import React from 'react';
import Card from './components/Card';

import './App.css';

function App() {
  return (
    <div className='app-container'>
      <Card cardColor='red' />
      <Card cardColor='yellow' />
      <Card cardColor='green' />
    </div>
  );
}

export default App;
