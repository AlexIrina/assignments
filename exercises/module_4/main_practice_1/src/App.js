import React from 'react';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServicesList from './pages/services/ServicesList';
import ServiceDetail from './pages/services/ServiceDetail';

function App() {
  return (
    <div className='App'>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/services'>
          <ServicesList />
        </Route>
        <Route path='/services/:serviceId'>
          <ServiceDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// create a switch and route for home and services
// import ServicesList. Will be displayed when user clicks on Services
// add a route to each service from the service list
// import servicesDetail and add a :serviceId variable
