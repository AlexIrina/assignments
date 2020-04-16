import React from 'react';

function TodoItem(props) {
  let completedStyles = {
    fontStyle: 'italic',
    color: 'red',
    textDecoration: 'line-through',
  };

  return (
    <div className='todo-item'>
      <input
        type='checkbox'
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? completedStyles : null}>
        {props.item.text}
      </p>
    </div>
  );
}

export default TodoItem;
