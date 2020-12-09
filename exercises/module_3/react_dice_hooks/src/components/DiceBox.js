import React, {useState} from 'react'
import Die from './Die'

export default function DiceBox(){
const [dice, setDice] = useState([0, 0, 0, 0, 0])
const generateRandomNum = () => Math.floor(Math.random() * 6 + 1)
const resetDice = () => setDice([0, 0, 0, 0, 0])
const rollDice = () => setDice([generateRandomNum(), generateRandomNum(), generateRandomNum(), generateRandomNum(), generateRandomNum()])
const die = dice.map((diceNumber, index) => <Die key={index} number={diceNumber} /> );
return (
    <div className='dicebox-container'>
      {die}
      <div className='btn-container'>
        <button onClick={rollDice} className='button'>Roll the Dice</button>
        <button onClick={resetDice} className='button'>Roll the Dice</button>
      </div>
    </div>
  )
}
