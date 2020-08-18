interface Todo {
  text: String;
  complete: boolean;
}

type ToggleTodo = (selectedTodo: todo) => void;

type AddToDo = (text: string) => void;