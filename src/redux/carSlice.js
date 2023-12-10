import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteId: [],
};

const carSlice = createSlice({
  name: 'cars',
  initialState: initialState,
  reducers: {
    addToFavorite(state, action) {
        const { id } = action.payload;
        // Перевірка, чи елемент ще не існує в масиві
        if (!state.favoriteId.includes(id)) {
          // Створення нового масиву з існуючих елементів та нового
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
