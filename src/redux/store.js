import {configureStore} from '@reduxjs/toolkit';
import todoSlice from './slices/todoSlice';
import objectSlice from './slices/objectSlice';

export const store = configureStore({
  reducer: {todoReducer: todoSlice, objectReducer: objectSlice},
});
