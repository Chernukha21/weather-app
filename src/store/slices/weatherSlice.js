import { createSlice } from '@reduxjs/toolkit';

export const FORECAST_PERIODS = {
  DAY: '24h',
  WEEK: 'week',
};

const initialState = {
  searchValue: '',
  selectedCity: null,
  period: FORECAST_PERIODS.DAY,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    },
    setPeriod: (state, action) => {
      state.period = action.payload;
    },
    resetWeatherSearch: (state) => {
      state.searchValue = '';
      state.selectedCity = null;
      state.period = FORECAST_PERIODS.DAY;
    },
  },
});

export const {
  setSearchValue,
  setSelectedCity,
  setPeriod,
  resetWeatherSearch,
} = weatherSlice.actions;

export default weatherSlice.reducer;
