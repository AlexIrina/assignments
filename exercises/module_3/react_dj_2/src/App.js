import React, {useState} from 'react'
import Square from './components/Square'

export default function App() {

const [colors, setColors] = useState( ["white", "white", "white", "white"])

const squareComponents = colors.map((color, key) => <Square colors={color} key={key}/>)

// Small time DJ:
// You will have one button that will change all four squares either black or white. White if the first one is not white. Black if the first square is white.

const smallTimeDj = () => setColors(prevColors => {
  const newColors = prevColors.colors.map(color => {
  if (color === 'white' || color === 'purple' || color === 'blue') {
      return 'black';
  } else if (color === 'black' || color === 'purple') {
      return 'white';
  } else {
      return color;
  }
  })
  return {
    colors: newColors
  }
})

// Party DJ:
// Add a second button. The second will turn the top half (both squares) of the grid purple.
const partyDj = () => setColors(prevColors => prevColors.colors = ['purple', 'purple','white','white'])

// Professional DJ:
//These next two will change the colors of the bottom squares blue, but individually. One will be linked to the bottom left, and the other to the bottom right.
const proDj = () =>  setColors(prevColors => prevColors.colors = ['white', 'white','blue','blue'])


// Big Time DJ:
// Your next four buttons will each be linked to one of the squares. These buttons can have any affect on those squares that you wish.
const bigTimeDj = () => setColors(prevColors => prevColors.colors = ['red', 'green','yellow','black'])


  return (
    <div className='parent'> 
                <>
                      {squareComponents}
                </>     
      <div className='buttons'>
        <div className='right-btns'>
          <button className='small-time' onClick={smallTimeDj}>Small time DJ</button>
          <button className='pro-dj' onClick={proDj}>Professional DJ</button>
        </div>
        <div className='left-btns'>
          <button className='big-time-dj' onClick={bigTimeDj}>Big Time DJ</button>
          <button className='party-dj' onClick={partyDj}>Party DJ</button>
        </div>
      </div>
    </div>
  );
}



