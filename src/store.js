import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slice/todosSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
