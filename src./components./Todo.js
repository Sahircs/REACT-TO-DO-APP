import React from 'react';

// Structure of any to-do item added

const Todo = ({ text, todos, todo, settodos }) => {

    const itemCompleted = () => {
        settodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    };
    
    // Deleting items using the id of item clicked and creating new toDos array of items with different id.
    const deleteItem = () => {
        settodos(todos.filter(item => item.id !== todo.id));
    };
    
    return ( 
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? 'completed': ''}`}>{text}</li> 
            <button onClick={itemCompleted} className='complete-btn'><i className='fas fa-check'></i></button>
            <button onClick={deleteItem} className='trash-btn'><i className='fas fa-trash'></i></button>
        </div>
    );
};


export default Todo;
