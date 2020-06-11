// import React, { useEffect, useState, useRef } from 'react';
// import styled from 'styled-components';
// function App() {
//   const STARTING_TIME = 5;

//   // setState
//   const [text, setText] = useState('');
//   const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
//   const [isTimeRunning, setIsTimeRunning] = useState(false);
//   const [wordCount, setWordCount] = useState(0);
//   const textBoxRef = useRef(null);

//   const handleChange = (e) => {
//     const { value } = e.target;
//     setText(value);
//   };

//   const calcWordCount = (txt) => {
//     const wordsArr = txt.trim().split(' ');
//     return wordsArr.filter((words) => words !== '').length;
//   };

//   const startGame = () => {
//     setIsTimeRunning(true);
//     setTimeRemaining(STARTING_TIME);
//     setText('');
//     textBoxRef.current.disabled = false;
//     textBoxRef.current.focus();
//   };

//   const endGame = () => {
//     setIsTimeRunning(false);
//     const numWords = calcWordCount(text);
//     setWordCount(numWords);
//   };

//   // useEffect
//   useEffect(() => {
//     // timer stops at 0
//     // checks is time is running
//     if (isTimeRunning && timeRemaining > 0) {
//       setTimeout(() => {
//         // change the time remaining by one second
//         setTimeRemaining((time) => time - 1);
//       }, 1000);
//     } else if (timeRemaining === 0) {
//       endGame();
//     }
//   }, [timeRemaining, isTimeRunning]);

//   // console.log(text);

//   return (
//     <>
//       <Title>How Fast Can You Type?</Title>
//       <form action=''>
//         <TextArea
//           ref={textBoxRef}
//           value={text}
//           onChange={handleChange}
//           disabled={!isTimeRunning}
//         />
//       </form>
//       <h4>Time Remaining: {timeRemaining}</h4>
//       <Button onClick={startGame} disabled={isTimeRunning}>
//         Start
//       </Button>
//       <h2>Word Count: {wordCount}</h2>
//     </>
//   );
// }

// export default App;

// const Button = styled.button`
//   font-family: 'Press Start 2P', cursive;
//   display: block;
//   margin: 0 auto;
//   border: none;
//   background: #a80020;
//   background: #00b800;
//   padding: 10px 20px;
//   text-transform: uppercase;
//   :disabled {
//     cursor: not-allowed;
//   }
// `;

// const Title = styled.h1`
//   font-size: 20px;
//   text-align: center;
// `;

// const TextArea = styled.textarea`
//   font-family: 'Press Start 2P';
//   font-size: x-large;
//   border: 3px solid black;
//   width: 90%;
//   margin: 0 auto;
//   outline: none;
//   height: 200px;
//   background: #00b800;
//   padding: 10px;
//   font-size: x-large;

//   :disabled {
//     background-color: #a5a2a2;
//     text-align: center;
//     font-size: xx-large;
//     cursor: not-allowed;
//   }
// `;

/**
 * Challenge: build the basic structure of our game
 *
 * 1. <h1> title at the top
 * 2. <textarea> for the box to type in
 *      (tip: React normalizes <textarea /> to be more like <input />,
 *      so it can be used as a self-closing element and uses the `value` property
 *      to set its contents)
 * 3. <h4> ti display the amount of time remaining
 * 4. <button> to start the game
 * 5. Another <h1> to display the word count
 
 * Challenge: 
 * Using hooks, track the state of the text in the textarea on every keystroke
 * To verify it's working, you could just console.log the state on every change
 
 * Challenge:
 * Create a function to calculate the number of separate words in the `text` state
 * For now, just console.log the word count when the button gets clicked to test it out.
 * 
 * Challenge:
 * 1. Create state to hold the current value of the countdown timer.
 *    Display this time in the "Time Remaining" header
 * * 2. Set up an effect that runs every time the `timeRemaining` changes
 *    The effect should wait 1 second, then decrement the `timeRemaining` by 1
 * 
 *    Hint: use `setTimeout` instead of `setInterval`. This will help you avoid
 *    a lot of extra work.
 * 
 *    Warning: there will be a bug in this, but we'll tackle that next
 * 3. Make it so the effect won't run if the time is already at 0

 * Challenge:
 * 
 * Make it so clicking the Start button starts the timer instead of it starting on refresh
 * (Hint: use a new state variable to indicate if the game should be running or not)
 * 

 * Challenge:
 * 
 * When the timer reaches 0, count the number of words the user typed in 
 * and display it in the "Word count" section

 * After the game ends, make it so the user can click the Start button again
 * to play a second time
 * 

 * Challenge:
 * 
 * Make the input box focus (DOM elements have a method called .focus()) 
 * immediately when the game starts


**/
import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const STARTING_TIME = 5;
  const [text, setText] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimerRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textAreaRef = useRef(null);

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const calculateNumOfWords = (text) => {
    const wordsArr = text.trim().split(' ');
    return wordsArr.filter((word) => word !== '').length;
  };

  const startGame = () => {
    setIsTimeRunning(true);
    setTimeRemaining(STARTING_TIME);
    setText('');
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
  };

  const endGame = () => {
    setIsTimeRunning(false);
    setWordCount(calculateNumOfWords(text));
  };

  useEffect(() => {
    if (timeRemaining > 0 && isTimerRunning) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimerRunning]);

  return (
    <div>
      <h1>How Fast Can You Type?</h1>
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={handleChange}
        disabled={!isTimerRunning}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimerRunning}>
        Start Game
      </button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
};

export default App;
/**

 * Make the input box focus (DOM elements have a method called .focus()) 
 * immediately when the game starts
 */
