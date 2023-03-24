import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: number;
  title: string;
  text: string;
  completed: boolean;
  date: string;
};

type TodosState = {
  list: Todo[];
  todo: Todo;
};

const initialState: TodosState = {
  list: [],
  todo: {
    id: 0,
    title: "",
    text: "",
    completed: false,
    date: "",
  },
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<{ title: string; text: string }>) {
      const date = new Date();
      state.list.push({
        title: action.payload.title,
        text: action.payload.text,
        id: Date.now(),
        completed: false,
        date: date.toLocaleDateString("en-US"),
      });
    },

    toggleComplete(state, action: PayloadAction<number>) {
      const toggledTodo = state.list.find((todo) => todo.id === action.payload);
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },

    removeTodo(state, action: PayloadAction<number>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },

    addChangeTodo(state, action: PayloadAction<Todo>) {
      debugger;
      state.todo = action.payload;
    },

    changeTodo(
      state,
      action: PayloadAction<{ title: string; text: string; id: number }>
    ) {
      const todo = state.list.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
        todo.text = action.payload.text;
      }
    },
  },
});

export const {
  addTodo,
  toggleComplete,
  removeTodo,
  changeTodo,
  addChangeTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
