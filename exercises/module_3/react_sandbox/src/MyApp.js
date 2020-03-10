import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Footer from './components/Footer';

import './App.css';

function MyApp() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <Article />
      <Footer />
    </div>
  );
}

export default MyApp;
