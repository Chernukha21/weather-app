import { Box } from '@mui/material';
import FavoriteCard from '../FavoriteCard/FavoriteCard.jsx';
import { useDeleteFavoriteMutation } from '../../api/favoritesApi.js';

const FavoriteList = ({ favorites }) => {
  const [deleteFavorite] = useDeleteFavoriteMutation();

  const handleDeleteFavorite = async (id) => {
    await deleteFavorite(id);
  };
  return (
    <Box>
      {favorites.map((city) => (
        <FavoriteCard
          key={city.id}
          city={city}
          onDelete={handleDeleteFavorite}
        />
      ))}
    </Box>
  );
};
export default FavoriteList;
