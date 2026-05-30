import { Box, Button, ButtonGroup, Card, CardContent } from '@mui/material';

import ForecastChart from '../ForecastChart/ForecastChart';
import { FORECAST_PERIODS } from '../../store/slices/weatherSlice.js';

const ForecastCard = ({ data, period, setPeriod }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Box sx={{ mb: 2 }}>
          <ButtonGroup>
            <Button
              variant={
                period === FORECAST_PERIODS.DAY ? 'contained' : 'outlined'
              }
              onClick={() => setPeriod(FORECAST_PERIODS.DAY)}
            >
              На 24 години
            </Button>

            <Button
              variant={
                period === FORECAST_PERIODS.WEEK ? 'contained' : 'outlined'
              }
              onClick={() => setPeriod(FORECAST_PERIODS.WEEK)}
            >
              На тиждень
            </Button>
          </ButtonGroup>
        </Box>

        <ForecastChart data={data} />
      </CardContent>
    </Card>
  );
};

export default ForecastCard;
