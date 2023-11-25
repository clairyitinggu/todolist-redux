import Todo from "./Todo";
import AddTodo from "./AddTodo";
export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
      <AddTodo />
    </ul>
  );
}
