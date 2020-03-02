import React from 'react';
import TodoItem from './component/TodoItem';
import './App.css';

function App() {
  return (
    <div className='todo-list'>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App;
