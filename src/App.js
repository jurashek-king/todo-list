import React, {useState} from "react";
import './App.css';
import Form from "./components/Form.js"
import TodoList from "./components/TodoList.js"

function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
  return (
    <div className="App">
        <header>
            <h1>Duri's todo list</h1>
        </header>
        <Form setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText}/>;
        <TodoList todos={todos} setTodos={setTodos}/>;
    </div>
  );
}

export default App;