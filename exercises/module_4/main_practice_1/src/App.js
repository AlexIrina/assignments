import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
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
        <Route exact path={`/services`}>
          <ServicesList />
        </Route>
        <Route path={`/services/:serviceId`}>
          <ServiceDetail />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
