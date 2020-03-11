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
      <Nav
        heros={{
          header: 'My heros are',
          hero1: 'Elon Musk',
          hero2: 'Joe Rogan',
          hero3: 'Irina Suslova',
          hero4: 'Nadezhda Lebedeva'
        }}
      />
      <Main
        dreamJob={{
          header: 'Top 3 dream Companies',
          company1: 'Onnit',
          company2: '23AndMe',
          company3: 'AirBnb'
        }}
        myPassion={{
          header: 'Top 3 Cities',
          city1: 'Neya',
          city2: 'Moscow',
          city3: 'Vladivostok'
        }}
      />
      <Footer
        // props
        contact={{
          imgUrl: 'http://placekitten.com/300/300',
          name: 'Asya',
          phone: '(435) 850-9343',
          email: 'meow@gmail.com'
        }}
      />
    </div>
  );
}

export default MyApp;
