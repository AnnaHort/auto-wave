import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteId: [],
};

const filterInitialState = {
  carsInfo: [],
  searchModel: '',
  searchPrice: null,
};

const filterCarSlice = createSlice({
  name: 'filterCars',
  initialState: filterInitialState,
  reducers: {
    getCarInfo(state, action) {
      state.carsInfo = action.payload;
    },
    getFilterModel(state, action) {
      state.searchModel = action.payload;
    },
    getFilterPrice(state, action) {
      state.searchPrice = action.payload;
    },
  },
});

const carSlice = createSlice({
  name: 'cars',
  initialState: initialState,
  reducers: {
    addToFavorite(state, action) {
      const { id } = action.payload;
      if (!state.favoriteId.includes(id)) {
        state.favoriteId = [...state.favoriteId, id];
      }
    },
    deleteFromFavorite(state, action) {
      const { id } = action.payload;
      state.favoriteId = state.favoriteId.filter(
        idFavorite => idFavorite !== id
      );
    },
  },
});

export const { addToFavorite, deleteFromFavorite } = carSlice.actions;
export const carReducer = carSlice.reducer;

export const { getFilterModel,getFilterPrice, getCarInfo, getFilterCars } = filterCarSlice.actions;
export const filterCarReducer = filterCarSlice.reducer;
