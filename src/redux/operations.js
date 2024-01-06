import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://657343ad192318b7db41d7f4.mockapi.io/advert';

export const getAllCarsInfo = createAsyncThunk(
  'cars/carsInfo',
  async (_, thunkAPI) => {
    try {
      // Отримайте значення фільтрів зі стану
      const { searchModel } =
        thunkAPI.getState().filter;

      const url = new URL(`${BASE_URL}`);
      url.searchParams.append('page', '1');
      url.searchParams.append('limit', '12');

      if (searchModel) url.searchParams.append('make', searchModel);

      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
