import React from 'react';
import Todo from './Todo'

// Maps all to-do items in toDos array onto Todo function to create UI for each item.

const ToDoList = ({ todos, settodos, filteredtodos }) => {
    return (
      <div className="todo-container">
        <ul className="todo-list">
          {filteredtodos.map((item) => (
            <Todo todos={todos} todo={item} settodos={settodos} key={item.id} text={item.text} />
          ))}
        </ul>  
      </div>
    );
};

export default ToDoList;
