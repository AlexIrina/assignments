import React from 'react';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </div>
  );
}

export default App;
