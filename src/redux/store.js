import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { carReducer } from "./carSlice";

const rootReducer = combineReducers({
    car: carReducer,
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  export const store = configureStore({
    reducer: persistedReducer,
// Вимкнення перевірки серіалізованості (як в попередньому відповіді)
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false, 
    }),
  });

  export const persistor = persistStore(store);