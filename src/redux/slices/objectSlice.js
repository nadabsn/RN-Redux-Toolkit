/* eslint-disable no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';
import {fetchObjects} from '../actions/objectsAction';

export const objectSlice = createSlice({
  name: 'objects',
  initialState: {loading: false, objects: [], error: ''},
  reducers: {
    // Add any additional reducers here
  },
  extraReducers: builder => {
    builder.addCase(fetchObjects.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchObjects.fulfilled, (state, action) => {
      state.loading = false;
      state.objects = action.payload.data;
      state.error = '';
    });
    builder.addCase(fetchObjects.rejected, (state, action) => {
      state.loading = false;
      state.objects = [];
      state.error = action.error.message;
    });
  },
});
export default objectSlice.reducer;
