import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

export const weatherApi = createApi({
  reducerPath: 'weatherApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org',
  }),

  endpoints: (builder) => ({
    getCities: builder.query({
      query: (city) => `/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`,
    }),

    getCurrentWeather: builder.query({
      query: ({ lat, lon }) =>
        `/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ua&appid=${API_KEY}`,
    }),

    getForecast: builder.query({
      query: ({ lat, lon }) =>
        `/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=ua&appid=${API_KEY}`,
    }),
  }),
});

export const {
  useGetCitiesQuery,
  useGetCurrentWeatherQuery,
  useGetForecastQuery,
} = weatherApi;
