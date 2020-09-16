import React from 'react';

// INPUT-BAR and FILTER-BAR

const Form = ({ setInputText, inputText, todos, settodos, setstatus }) => {

    const inputTextHandler = (text) => {
        console.log(text.target.value); // Returns the text inputted by user to console
        setInputText(text.target.value);
    };

    const submitToDo = (text) => {
        text.preventDefault();
        settodos([
            ...todos,
            {text:inputText, completed: false, id:Math.random() * 1000}
        ]);
        setInputText('');
    };

    const statusHandler = (item) => {
            setstatus(item.target.value); // Changes the state of the 'container' to all/comp/uncomp - visible in console.
    };

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} className="todo-input" type="text"/>
            <button onClick={submitToDo} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler}  name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
    };


export default Form;
