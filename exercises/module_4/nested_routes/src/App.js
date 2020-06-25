import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/profile/Profile';
import Info from './pages/profile/Info';
import Settings from './pages/profile/Settings';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route path='/profile/Info'>
          <Info />
        </Route>
        <Route path='/profile/Settings'>
          <Settings />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
