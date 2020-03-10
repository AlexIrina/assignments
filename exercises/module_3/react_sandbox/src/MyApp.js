import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Article from './components/Article';
import './App.css';

function MyApp() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <Article />
      <footer></footer>
    </div>
  );
}

export default MyApp;
