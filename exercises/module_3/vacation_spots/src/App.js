import React from 'react';
import './App.css';
import vacationData from './data/vacationSpots';
import Card from './components/Card';

function App() {
  const vacationCard = vacationData.map((item) => (
    <Card key={item.id} card={item} />
  ));
  return <div className='App'>{vacationCard}</div>;
}

export default App;
