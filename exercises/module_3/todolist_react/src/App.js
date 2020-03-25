import React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = id => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          // returned a new object that will replace the todo in the new array
          return {
            // gives me all the propertied of the todo
            ...todo,
            // manually change the completed property
            completed: !todo.completed
          };
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  };

  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return <div className='todo-list'>{todoItems}</div>;
  }
}

export default App;
