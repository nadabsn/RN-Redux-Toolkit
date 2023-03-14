import {createSlice} from '@reduxjs/toolkit';
let id = 0;
export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.list = [...state.list, {id: id++, task: action.payload}];
    },
  },
});
export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;
