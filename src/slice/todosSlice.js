import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Async thunk for fetch todos
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch("http://localhost:5000/todos");
  return response.json();
});

//Async thunk for adding a new todo
export const createTodo = createAsyncThunk(
  "todos/createTodo",
  async (newTodo) => {
    const response = await fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    return response.json();
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      {
        id: 1,
        todo: "Do something nice for someone I care about",
        completed: true,
      },
      {
        id: 2,
        todo: "Memorize the fifty states and their capitals",
        completed: false,
      },
      {
        id: 3,
        todo: "Watch a classic movie",
        completed: false,
      },
      {
        id: 4,
        todo: "Contribute code or a monetary donation to an open-source software project",
        completed: false,
      },
      {
        id: 5,
        todo: "Solve a Rubik's cube",
        completed: false,
      },
      {
        id: 6,
        todo: "Bake pastries for me and neighbor",
        completed: false,
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, ...rest } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        Object.assign(todo, rest);
      }
    },
  },
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.status = "loading";
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.todos = action.payload;
    },
    [fetchTodos.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [createTodo.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
    },
    // [removeTodo.fulfilled]: (state, action) => {
    //   state.items.push(action.payload);
    // },
  },
});

export const { addTodo, removeTodo, updateTodo } = todosSlice.actions;
export default todosSlice.reducer;
