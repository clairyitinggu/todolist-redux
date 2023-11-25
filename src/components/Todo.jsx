import { useState } from "react";
import { removeTodo, updateTodo } from "../slice/todosSlice";
import { useDispatch } from "react-redux";

export default function Todo({ todo }) {
  const [isHidden, setIsHidden] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todo.todo);
  const dispatch = useDispatch();

  const handleUpdate = (id) => {
    dispatch(
      updateTodo({
        id: id,
        todo: updatedTodo,
      })
    );
    setIsHidden(!isHidden);
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      <li key={todo.id}>
        {isHidden ? (
          <>
            <input
              type="text"
              value={updatedTodo}
              onChange={(e) => setUpdatedTodo(e.target.value)}
            />
            <button onClick={() => handleUpdate(todo.id)}>Update</button>
            <button onClick={() => setIsHidden(!isHidden)}>Cancel</button>
          </>
        ) : (
          <>
            {todo.todo}
            <button onClick={() => setIsHidden(!isHidden)}>Edit</button>
            <button onClick={() => handleRemove(todo.id)}>Remove</button>
          </>
        )}
      </li>
    </>
  );
}
