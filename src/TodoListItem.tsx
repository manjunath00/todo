import React from 'react'

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.complete}
        onClick={() => {
          toggleTodo(todo);
        }}
      />
      <label style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>
        {todo.text}
      </label>
    </li>
  )
};

export default TodoListItem;
