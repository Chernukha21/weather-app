import { useGetFavoritesQuery } from '../../api/favoritesApi.js';
import FavoriteList from '../../components/FavoriteList/FavoriteList.jsx';

const FavoritePage = () => {
  const { data: favorites = [] } = useGetFavoritesQuery();

  return <FavoriteList favorites={favorites} />;
};

export default FavoritePage;
