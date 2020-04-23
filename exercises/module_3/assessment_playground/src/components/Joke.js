import React from 'react';

function Joke(props) {
  return (
    <div>
      {/*  */}
      <h2 style={{ display: !props.question && 'none' }}>
        Question : {props.question}
      </h2>
      <h2 style={{ color: !props.question && 'grey' }}>
        Answer: {props.punchLine}
      </h2>
    </div>
  );
}

export default Joke;

// One LAST time in this course, set up a React app from scratch
// Render an <App /> component
// App should be in its own file
// App should render 5 <Joke /> components
// Each Joke should receive a "question" prop and a "punchLine" prop
// and render those however you'd like

// EXTRA CREDIT:
// Some jokes are only a punch line with no question:
// If you don't pass in a "question" prop, how might you make it only show the punchline instead?

// Spend time practicing the style of your Joke component
