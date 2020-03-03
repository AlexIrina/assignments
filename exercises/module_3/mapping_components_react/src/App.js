import React from 'react';
import Joke from './components/Joke';
import jokesData from './jokesData';

function App() {
  // create a joke component from the jokesData
  const jokeComponent = jokesData.map(joke => {
    return (
      <Joke id={joke.id} question={joke.question} punchLine={joke.punchLine} />
    );
  });
  // can use js above the return
  return <div>{jokeComponent}</div>;
}

export default App;
