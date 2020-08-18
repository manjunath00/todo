import React, { useState } from 'react';
import TodoListItem from './TodoListItem';

const initialTodos: Todo[] = [
  {
    text: 'Cut vegetables',
    complete: false
  },
  {
    text: 'Walk the dog',
    complete: false
  },
  {
    text: 'Bring milk',
    complete: false
  }
]

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewToDo] = useState('');

  // const newTodoSubmit = (e) => {

  // }

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addToDo: AddToDo = (text: string) => {
    const newToDo = { text, complete: false };
    setTodos([...todos, newToDo]);
  }

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={(e) => { e.preventDefault(); addToDo(newTodo); setNewToDo('')}}>
        <input type='text' placeholder='Add a todo' value={newTodo} onChange={e => setNewToDo(e.target.value)} />
        <input type='submit' />
      </form>
      <div className="App">
        {todos.map(item => <TodoListItem todo={item} toggleTodo={toggleTodo} />)}
      </div>
    </>
  );
}

export default App;
