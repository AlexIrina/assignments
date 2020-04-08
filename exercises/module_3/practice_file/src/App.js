import React, { Component } from 'react';
import Header from './components/Header';
import ContactCard from './components/ContactCard';
import usersData from './data/usersData';
import Product from './components/Product';
import productsData from './data/productsData';
import TodoItem from './components/TodoItem';
import todosData from './data/todosData';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // functional components go below
    const productComponent = productsData.map((item) => {
      return <Product key={item.id} product={item} />;
    });

    const userComponent = usersData.map((user) => {
      return <ContactCard key={user.id} person={user} />;
    });

    const todoComponent = todosData.map((todo) => {
      return <TodoItem key={todo.id} item={todo} />;
    });

    return (
      <div className='App'>
        <div className='header'>
          <Header />
        </div>
        {/* users */}
        <div className='contacts'>{userComponent}</div>
        {/* todo-list */}
        <div className='todo-list'>
          <h1>My Todo List</h1>
          {todoComponent}
        </div>
        {/*  todo-list end*/}

        {/* delete this later */}
        <div className='test-area'>{productComponent}</div>
      </div>
    );
  }
}

export default App;