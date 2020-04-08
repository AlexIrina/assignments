import React, { Component } from 'react';
import TodoItem from './components/TodoItem';
import todosData from './data/todosData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
  }

  render() {
    const todo = this.state.todos.map((todo) => (
      <TodoItem key={todo.id} item={todo} />
    ));
    return <div className='todo-list'>{todo}</div>;
  }
}

export default App;
