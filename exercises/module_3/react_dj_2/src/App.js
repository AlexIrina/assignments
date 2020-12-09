import React, {useState} from 'react'
import Square from './components/Square'

export default function App() {

const [colors, setColors] = useState( ["white", "white", "white", "white"])
const squareComponents = colors.map((color, key) => <Square colors={color} key={key}/>)

// Small time DJ:
// You will have one button that will change all four squares either black or white. White if the first square is not white. Black if the first square is white.
const smallTimeDj = () => setColors(prevColors => {
 return prevColors[0] === 'white' ? prevColors = ['black','black','black','black'] : prevColors = ["white", "white", "white", "white"] 
}
)

// Party DJ:
// Add a second button. The second will turn the top half (both squares) of the grid purple.
const partyDj = () => setColors(prevColors => {
  return prevColors[0] === 'white' ?  prevColors = ["purple", "purple", "white", "white"] : prevColors = [ "white", "white", "purple", "purple"]
})

// Professional DJ:
//These next two will change the colors of the bottom squares blue, but individually. One will be linked to the bottom left, and the other to the bottom right.
const proDj = () =>  setColors(prevColors => {
  return prevColors[2] === 'blue' ? prevColors = ['white','white','white','blue'] : prevColors = ['white','white','blue','white'] 
})

// Big Time DJ:
// Your next four buttons will each be linked to one of the squares. These buttons can have any affect on those squares that you wish.
const bigTimeDj = () => setColors(prevColors => {
  return prevColors[0] === 'violet' ?  prevColors = ["red", "pink", "orange", "yellow"]  : prevColors = ["violet", "grey", "crimson", "green"] 
})


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



