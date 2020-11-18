import React from 'react'
import Spot from './components/Spot'
import vacationSpots from './data/vacationSpots'
export default function App() {
  const spotComponent = vacationSpots.map((item, key) => 
        <Spot 
          key={key} 
          location={item} 
          />)

  return (
    <div className='container'>
      {spotComponent}
    </div>
  )
}
