import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import { Route, Switch } from 'react-router-dom';
import './styles.css';
function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/skills'>
          <Skills />
        </Route>
        <Route path='/work'>
          <Work />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
