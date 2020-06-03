import React, { useRef, useEffect, useState } from 'react';

function App() {
  // setState
  const [text, setText] = useState('');

  // // useEffect
  // useEffect(() => {
  //   effect;
  //   return () => {
  //     cleanup;
  //   };
  // }, [input]);

  // // useRef
  // const ref = useRef(initialValue);

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const calcWordCount = (txt) => {
    const wordsArr = txt.trim().split(' ');
    return wordsArr.filter((words) => words !== '').length;
  };

  // console.log(text);

  return (
    <div>
      <h1>How Fast Do You Type?</h1>
      <form action=''>
        <textarea value={text} onChange={handleChange} />
      </form>
      <h4>Time Remaining: ???</h4>
      <button onClick={() => console.log(calcWordCount(text))}>Start</button>
      <h1>Word Count: ???</h1>
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
 */

/**
 * Challenge: Using hooks, track the state of the text in the textarea on every keystroke
 * To verify it's working, you could just console.log the state on every change
 */

/**
 * Challenge:
 *
 * Create a function to calculate the number of separate words in the `text` state
 * For now, just console.log the word count when the button gets clicked to test it out.
 */
