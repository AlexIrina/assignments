import React, { useEffect, useState } from 'react';

function App() {
  const STARTING_TIME = 5;

  // setState
  const [text, setText] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const calcWordCount = (txt) => {
    const wordsArr = txt.trim().split(' ');
    return wordsArr.filter((words) => words !== '').length;
  };

  const startGame = () => {
    setIsTimeRunning(true);
    setTimeRemaining(STARTING_TIME);
    setText('');
  };

  const endGame = () => {
    setIsTimeRunning(false);
    const numWords = calcWordCount(text);
    setWordCount(numWords);
  };

  // useEffect
  useEffect(() => {
    // timer stops at 0
    // checks is time is running
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        // change the time remaining by one second
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  // console.log(text);

  return (
    <div>
      <h1>How Fast Do You Type?</h1>
      <form action=''>
        <textarea
          value={text}
          onChange={handleChange}
          disabled={!isTimeRunning}
        />
      </form>
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;

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
**/
