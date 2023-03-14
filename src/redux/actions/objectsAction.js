import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
//Generates pending,fulfilled and rejected action types
export const fetchObjects = createAsyncThunk(
  'objects/fetchObject',
  async () => {
    try {
      const response = await axios.get(`https://api.restful-api.dev/objects`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
);
