import React from 'react';
import MyInfo from './components/MyInfo';
import Header from './components/Header';
import Joke from './components/Joke';
import jokesData from './data/jokesData';

function App() {
  const jokeComponent = jokesData.map((joke, key) => {
    return (
      <Joke key={key} question={joke.question} punchLine={joke.punchLine} />
    );
  });
  return (
    <div className='grid-container'>
      {/* the variable jokeComponent replaces all below */}
 
      {/* <Joke punchLine="I don't know, but the flag is a big plus!" />
      <Joke
        question="What's the best thing about Switzerland?"
        punchLine="I don't know, but the flag is a big plus!"
      />
      <Joke
        question="Did you hear about the mathematician who's afraid of negative numbers?"
        punchLine="He'll stop at nothing to avoid them!"
      />
      <Joke
        question='Hear about the new restaurant called Karma?'
        punchLine='There’s no menu: You get what you deserve.'
      />
      <Joke
        question='Did you hear about the actor who fell through the floorboards?'
        punchLine='He was just going through a stage.'
      />
      <Joke
        question='Did you hear about the claustrophobic astronaut?'
        punchLine='He just needed a little space.'
      /> */}

      {jokeComponent}
    </div>
  );
}

export default App;
