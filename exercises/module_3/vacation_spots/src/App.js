import React from 'react';
import './App.css';
import vacationData from './vacationSpots';
import Card from './components/Card';

function App() {

  const vacationCard = vacationData.map(item => {
    return (
      <div>
        <Card key={item.id} card={item} />
      </div>
    );
  });
  return <div className='App'>{vacationCard}</div>;
}

export default App;