import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      {/* my links */}
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      {/* Switches to which route to render.      Similar to a switch statement in js*/}
      <Switch>
        {/* routes me to the page */}
        <Route exact path='/' render={() => <h1>Home Page</h1>} />
        <Route path='/about' render={() => <h1>About Page </h1>} />
      </Switch>
    </div>
  );
}

export default App;
