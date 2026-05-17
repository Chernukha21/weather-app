import { configureStore } from '@reduxjs/toolkit';
import { weatherApi } from '../api/weatherApi';
import { favoritesApi } from '../api/favoritesApi.js';
import weatherReducer from './slices/weatherSlice.js';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(weatherApi.middleware)
      .concat(favoritesApi.middleware),
});
