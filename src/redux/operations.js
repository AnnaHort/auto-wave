import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://657343ad192318b7db41d7f4.mockapi.io/advert';

export const getAllCarsInfo = createAsyncThunk(
  'cars/carsInfo',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}?page=1&limit=12`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

