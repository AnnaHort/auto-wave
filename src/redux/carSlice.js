import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteId: [],
};

const filterInitialState = {
  carsInfo: [],
  searchModel: '',
  searchPrice: null,
  searchMileageFrom: null,
  searchMileageTo: null,
  currentPage: 1,
  reset: false,
  moreData: true,
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
    getFilterMileageFrom(state, action) {
      state.searchMileageFrom = action.payload;
    },
    getFilterMileageTo(state, action) {
      state.searchMileageTo = action.payload;
    },
    changeReset(state) {
      state.searchModel = '';
      state.searchPrice = null;
      state.searchMileageFrom = null;
      state.searchMileageTo = null;
      state.reset = false;
      state.currentPage = 1;
      state.moreData = true
    },
    reset(state) {
      state.reset = true;
      state.currentPage = 1;
    },
    updateCurrentPage(state) {
      state.currentPage += 1;
    },
    addMoreData(state) {
      state.moreData = true
    },
    deleteMoreData(state){
      state.moreData = false
    }
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

export const {
  getFilterModel,
  getFilterPrice,
  getCarInfo,
  getFilterMileageFrom,
  getFilterMileageTo,
  changeReset,
  reset,
  updateCurrentPage,
  addMoreData,
  deleteMoreData,
} = filterCarSlice.actions;
export const filterCarReducer = filterCarSlice.reducer;
