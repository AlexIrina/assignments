import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className='container'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/services'>
          <Services />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
