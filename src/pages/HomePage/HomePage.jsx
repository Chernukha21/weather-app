import { useState } from 'react';
import { skipToken } from '@reduxjs/toolkit/query';
import {
  useGetCitiesQuery,
  useGetCurrentWeatherQuery,
  useGetForecastQuery,
} from '../../api/weatherApi.js';
import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
  useGetFavoritesQuery,
} from '../../api/favoritesApi.js';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import WeatherSearch from '../../components/WeatherSearch/WeatherSearch.jsx';
import WeatherCard from '../../components/WeatherCard/WeatherCard.jsx';
import { getForecast24h, getWeeklyForecast } from '../../utils/index.js';
import ForecastCard from '../../components/ForecastCard/ForecastCard.jsx';
import { Alert } from '@mui/material';
import {
  setPeriod,
  setSearchValue,
  setSelectedCity,
} from '../../store/slices/weatherSlice.js';

const HomePage = () => {
  const dispatch = useDispatch();
  const { searchValue, selectedCity, period } = useSelector(
    (state) => state.weather,
  );
  const [favoriteError, setFavoriteError] = useState('');
  const { data: cities = [], isFetching: isCitiesLoading } = useGetCitiesQuery(
    searchValue,
    {
      skip: searchValue.trim().length < 2,
    },
  );

  const {
    data: weather,
    isFetching: isWeatherLoading,
    refetch,
  } = useGetCurrentWeatherQuery(
    selectedCity
      ? {
          lat: selectedCity.lat,
          lon: selectedCity.lon,
        }
      : skipToken,
  );

  const {
    data: forecast,
    isFetching: isForecastLoading,
    error: forecastError,
  } = useGetForecastQuery(
    selectedCity
      ? {
          lat: selectedCity.lat,
          lon: selectedCity.lon,
        }
      : skipToken,
  );

  const { data: favorites = [] } = useGetFavoritesQuery();
  const [addFavorite] = useAddFavoriteMutation();
  const [deleteFavorite] = useDeleteFavoriteMutation();
  const currentFavorite = favorites.find(
    (favorite) =>
      favorite.lat === selectedCity?.lat && favorite.lon === selectedCity?.lon,
  );

  const isFavorite = Boolean(currentFavorite);

  const forecast24h = forecast?.list?.slice(0, 8) || [];
  const chartData24h = getForecast24h(forecast);
  const weeklyData = getWeeklyForecast(forecast);

  const handleSearch = (value) => {
    dispatch(setSearchValue(value));

    if (!value.trim()) {
      dispatch(setSelectedCity(null));
    }
  };

  const handleSelectCity = (city) => {
    dispatch(setSelectedCity(city));
  };

  const handleToggleFavorite = async () => {
    if (!selectedCity) return;

    if (isFavorite) {
      await deleteFavorite(currentFavorite.id);
      setFavoriteError('');
      return;
    }

    if (favorites.length >= 5) {
      setFavoriteError('Максимум 5 обраних локацій');

      setTimeout(() => {
        setFavoriteError('');
      }, 3000);

      return;
    }
    await addFavorite({
      name: selectedCity.local_names?.uk || selectedCity.name,
      country: selectedCity.country,
      state: selectedCity.state || '',
      lat: selectedCity.lat,
      lon: selectedCity.lon,
    });

    setFavoriteError('');
  };

  const cityName = selectedCity?.local_names?.uk ?? selectedCity?.name ?? '';
  const activeData = period === '24h' ? chartData24h : weeklyData;
  return (
    <>
      <WeatherSearch
        cities={cities}
        isLoading={isCitiesLoading}
        onSearch={handleSearch}
        onSelectCity={handleSelectCity}
      />
      {isCitiesLoading && <p>Loading cities...</p>}
      {isWeatherLoading && <p>Loading weather...</p>}

      {weather && selectedCity && (
        <WeatherCard
          cityName={cityName}
          country={selectedCity.country}
          state={selectedCity.state}
          temperature={Math.round(weather.main.temp)}
          windSpeed={weather.wind.speed}
          clouds={weather.clouds.all}
          humidity={weather.main.humidity}
          visibility={weather.visibility}
          sunrise={weather.sys.sunrise}
          sunset={weather.sys.sunset}
          lat={weather.coord.lat}
          lon={weather.coord.lon}
          feels_like={weather.main.feels_like}
          updated={weather.dt}
          onRefresh={refetch}
          isFavorite={isFavorite}
          onToggleFavorite={handleToggleFavorite}
        />
      )}
      {favoriteError && (
        <Alert
          severity="warning"
          onClose={() => setFavoriteError('')}
          sx={{ mb: 2 }}
        >
          {favoriteError}
        </Alert>
      )}
      {isForecastLoading && <p>Loading forecast...</p>}

      {forecastError && <p>Forecast error</p>}
      {forecast24h.length > 0 && selectedCity && (
        <ForecastCard
          data={activeData}
          period={period}
          setPeriod={(value) => dispatch(setPeriod(value))}
        />
      )}
    </>
  );
};

export default HomePage;
