import React, { Component } from 'react';
import Header from './components/Header';
import ContactCard from './components/ContactCard';

import TodoItem from './components/TodoItem';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='header'>
          <Header />
        </div>
        <div className='contacts'>
          <ContactCard />
        </div>
        {/* todo-list */}
        <div className='todo-list'>
          <h1>My Todo List</h1>
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
        {/*  todo-list end*/}
      </div>
    );
  }
}

export default App;
