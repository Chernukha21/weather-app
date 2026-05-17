import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  selectedCity: null,
  period: '24h',
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
      state.period = '24h';
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
