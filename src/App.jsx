import "./App.css";
import TodoList from "./components/TodoList";
import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { fetchTodos } from "./slice/todosSlice";

function App() {
  // const { todos, status, error } = useSelector((state) => state.todos);
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const isLoading = status === "loading";

  // useEffect(() => {
  //   dispatch(fetchTodos());
  // }, [dispatch]);

  return (
    <>
      <h1>Todo List App</h1>
      <div className="card">
        {isLoading ? <div>Loading...</div> : <TodoList todos={todos} />}
      </div>
    </>
  );
}

export default App;
