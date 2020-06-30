import React from 'react';
import ServicesDetail from './pages/services/ServicesDetail';
import ServicesList from './pages/services/ServicesList';
import Header from './components/Header';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/services'>
          <ServicesList />
        </Route>
        <Route path='/services/:serviceId'>
          <ServicesDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
