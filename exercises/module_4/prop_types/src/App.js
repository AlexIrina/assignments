import React from 'react';
import Card from './components/Card';
import RoundedImg from './components/RoundedImg';

function App() {
  return (
    <div>
      <Card cardColor='red' />
      {/* height and width is set to 100 by default props inside Card component */}
      <Card cardColor='yellow' />
      <Card height={100} />

      <div style={{ marginLeft: '33%' }} className='img-container'>
        <RoundedImg
          src='https://picsum.photos/id/237/500/500'
          borderRadius={20}
        />
      </div>
    </div>
  );
}

export default App;
