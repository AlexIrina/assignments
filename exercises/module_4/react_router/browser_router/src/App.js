import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
function App() {
  return (
    <div className='App'>
      {/* my links */}
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      {/* Switches to which route to render.      Similar to a switch statement in js*/}
      <Switch>
        {/* routes me to the page */}
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
