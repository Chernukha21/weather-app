import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RefreshIcon from '@mui/icons-material/Refresh';
import { getCountryName } from '../../utils/index.js';

const WeatherCard = ({
  cityName,
  temperature,
  state,
  country,
  windSpeed,
  clouds,
  humidity,
  visibility,
  sunrise,
  sunset,
  lat,
  lon,
  feels_like,
  updated,
  onRefresh,
  isFavorite,
  onToggleFavorite,
}) => {
  const cityLabel = `${cityName}${state ? `, ${state}` : ''}, ${getCountryName(country)}`;
  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('uk-UA', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: 2,
          }}
        >
          <Box>
            <Typography variant="h5" fontWeight={700}>
              {cityLabel}
            </Typography>

            <Typography variant="h3" fontWeight={700}>
              {temperature}°C
            </Typography>
            <Typography color="text.secondary">
              Відчувається {Math.floor(feels_like.toFixed(1))} °C
            </Typography>
            <Typography color="text.secondary">Хмарність {clouds} %</Typography>
            <Typography>Оновлено: {formatTime(updated)}</Typography>
          </Box>

          <Box>
            <IconButton
              onClick={onToggleFavorite}
              color={isFavorite ? 'error' : 'default'}
            >
              {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>

            <IconButton color="primary" onClick={() => onRefresh()}>
              <RefreshIcon />
            </IconButton>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 1,
          }}
        >
          <Typography>Вітер: {windSpeed} м/с</Typography>
          <Typography>Вологість: {humidity} </Typography>
          <Typography>Хмарність: {clouds} </Typography>
          <Typography>Видимість: {visibility / 1000} км</Typography>
          <Typography>Схід: {formatTime(sunrise)}</Typography>
          <Typography>Захід: {formatTime(sunset)} </Typography>
          <Typography>Широта: {lat.toFixed(2)} </Typography>
          <Typography>Довгота: {lon.toFixed(2)} </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
