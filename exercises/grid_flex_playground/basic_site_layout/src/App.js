import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }
  render() {
    return (
      <div className='container'>
        <Navbar />
        <Menu />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
