import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/form'
import ToDoList from './components/Todo-List'


function App() {

  // STATES

  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState('all'); // default is all
  const [filteredToDos, setFilteredToDos] = useState([]);


  const saveLocalToDos = () => {
    localStorage.setItem('to-do items', JSON.stringify(toDos))
  };

  // 
  const getlocalToDos = () => {
    if(localStorage.getItem('to-do items') === null) {
      localStorage.getItem(('to-do items'), JSON.stringify([])); 
    } else {
      let todolocal = JSON.parse(localStorage.getItem('to-do items')) 
      setToDos(todolocal);
    }
  };

  // Update UI when window refreshed so items don't disappear.
  useEffect ( () => {
    getlocalToDos(); // Items set to toDos in any state changes.
  }, []); // empty array so only runs once.


  // FILTER

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredToDos(toDos.filter(todo => todo.completed === true));  
        break;
      case 'uncompleted':
        setFilteredToDos(toDos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredToDos(toDos);
         break;
    };
  };


  // USE-EFFECT 
  useEffect( () => { 
    filterHandler(); // Updates filterHandler when any change is state
    saveLocalToDos(); // Updates console ('Application folder') with each item and its details (text/status/id) 
  }, [toDos, status]); // runs twice when status/toDos change


  return (
    <div className="App">
      <header>
        <h2> <i>Sahir's To-do List</i></h2>
      </header>
      <Form setInputText={setInputText} inputText={inputText} todos={toDos} settodos={setToDos} setstatus={setStatus} />
      <ToDoList todos={toDos} settodos={setToDos} filteredtodos={filteredToDos} />
    </div>
  );
};

export default App;
