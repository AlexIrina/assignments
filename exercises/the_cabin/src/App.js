import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className='main-grid'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

// sub-grid(whatever is inside header, main, footer) is only supported in firefox NOT CHROME

export default App;
