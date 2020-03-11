import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

import './App.css';

function MyApp() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <Main />
      <Footer
        // props
        contact={{
          imgUrl: 'http://placekitten.com/300/200',
          name: 'Asya',
          phone: '(435) 850-9343',
          email: 'meow@gmail.com'
        }}
      />
    </div>
  );
}

export default MyApp;
