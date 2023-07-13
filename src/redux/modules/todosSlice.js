import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/**
 * 2초 지연을 시키는 함수입니다 (비동기 작업).
 */
import { waitTwoSeconds } from "../../utils";

export const __addToDo = createAsyncThunk(
  "__addToDo",
  async (payload, thunkAPI) => {
    await waitTwoSeconds();
    thunkAPI.dispatch(addTodo(payload));
  }
);

export const __deleteTodo = createAsyncThunk(
  "__deleteToDo",
  async (payload, thunkAPI) => {
    await waitTwoSeconds();
    thunkAPI.dispatch(deleteTodo(payload));
  }
);

const initialState = {
  list: [{ id: 1, title: "리액트 공부하기", body: "리액트 심화 강의 듣기" }],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const index = state.list.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.list.splice(index, 1);
      }
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
