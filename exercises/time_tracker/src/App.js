import React from 'react';
import Card from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      <div className='card'>
        <Header />
        <Card
          date='7/01/20'
          dash='------------'
          time='6:00am'
          description='Worked on time tracker UI'
          totalTime='Total: 11 hours 28minutes '
          totalWorkingHrsMins='8hours 24minutes'
          totalPersonalTime='3hours 4 minutes'
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
