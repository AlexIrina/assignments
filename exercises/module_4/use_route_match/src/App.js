import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/profile/Profile';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
