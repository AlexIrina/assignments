import React from 'react';
import Card from './components/Card';
function App() {
  return (
    <div className='App'>
      <Card cardColor='yellow' height={200} width={200} />
      {/* bellow props aren't receiving the height and with props thats why they get the default height and width of 100px */}
      <Card cardColor='red' />
      <Card cardColor='green' />
    </div>
  );
}

export default App;
