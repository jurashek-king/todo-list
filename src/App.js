import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  }, [status, todos]);

  const getLocalTodos = () => {
    const localTodos = localStorage.getItem('todos');
    if (localTodos) {
      const todosFromJSON = JSON.parse(localTodos);
      setTodos(todosFromJSON);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Duri's todo list</h1>
      </header>
      <Form
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setStatus={setStatus}
      />
      ;
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
      ;
    </div>
  );
}

export default App;
