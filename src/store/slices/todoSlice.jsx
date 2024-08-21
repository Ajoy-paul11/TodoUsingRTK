import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    setTodos(state, action) {
      return action.payload;
    },
    addTodo(state, action) {
      state.push(action.payload);
    },
    updateTodo(state, action) {
      // const index = state.findIndex((todo) => todo.id === action.payload.id);
      // if (index !== -1) {
      //   state[index] = action.payload;
      // }

      state = state.map((item) => {
        return item.id === action.payload.id
          ? (item.todo = action.payload.todo)
          : item.todo;
      });
    },
    deleteTodo: (state, action) => {
      state.splice(action.payload, 1);
    },
    toggleTodo: (state, action) => {
      state = state.map((item) =>
        item.id === action.payload.id
          ? (item.toggleComplete = action.payload.toggleComplete)
          : item.toggleComplete
      );
    },
  },
});

// localStorage.getItem("Todos",  JSON.stringify());

export const { addTodo, deleteTodo, updateTodo, toggleTodo, setTodos } =
  todoSlice.actions;

export default todoSlice.reducer;
