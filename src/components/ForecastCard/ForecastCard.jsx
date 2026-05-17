import { Box, Button, ButtonGroup, Card, CardContent } from '@mui/material';

import ForecastChart from '../ForecastChart/ForecastChart';

const ForecastCard = ({ data, period, setPeriod }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Box sx={{ mb: 2 }}>
          <ButtonGroup>
            <Button
              variant={period === '24h' ? 'contained' : 'outlined'}
              onClick={() => setPeriod('24h')}
            >
              На 24 години
            </Button>

            <Button
              variant={period === 'week' ? 'contained' : 'outlined'}
              onClick={() => setPeriod('week')}
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
