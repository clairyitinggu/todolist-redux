import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { createTodo } from "../slice/todosSlice";
import { addTodo } from "../slice/todosSlice";

export default function AddTodo() {
  const [isHidden, setIsHidden] = useState(true);
  const [todo, setTodo] = useState("");
  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  const handleTodo = () => {
    const newTodos = {
      id: todos.length + 1,
      todo: todo,
      completed: false,
    };
    setIsHidden(!isHidden);
    // dispatch(createTodo(newTodos));
    dispatch(addTodo(newTodos));
    setTodo("");
  };
  return (
    <>
      {isHidden ? (
        <button onClick={() => setIsHidden(!isHidden)}>
          + Create a new Item
        </button>
      ) : (
        <div>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={handleTodo}>Add</button>
          <button onClick={() => setIsHidden(!isHidden)}>Cancel</button>
        </div>
      )}
    </>
  );
}
