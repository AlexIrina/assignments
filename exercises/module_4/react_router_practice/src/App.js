import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contacts from './components/Contact';
const App = () => {
  return (
    <div className='container'>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contacts'>Contacts</Link>
      </nav>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contacts'>
          <Contacts />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
