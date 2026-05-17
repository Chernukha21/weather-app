import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { getCountryName } from '../../utils/index.js';
import DeleteIcon from '@mui/icons-material/Delete';

const FavoriteCard = ({ city, onDelete }) => {
  const countryName = getCountryName(city.country);

  return (
    <Card sx={{ mb: 1 }}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box>
            <Typography fontWeight={700}>{city.name}</Typography>
            <Typography color="text.secondary">{countryName}</Typography>
          </Box>

          <CardActions sx={{ p: 0 }}>
            <Button
              size="small"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={() => onDelete(city.id)}
            >
              Видалити
            </Button>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FavoriteCard;
