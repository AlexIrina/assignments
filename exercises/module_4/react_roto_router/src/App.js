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
        <Route exact to='/'>
          <Home />
        </Route>
        <Route to='/Services'>
          <Services />
        </Route>
        <Route to='/Contact'>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
