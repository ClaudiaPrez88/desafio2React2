import { ContextPexels } from "../context/Context";
import { useContext } from 'react';

const Favorites = () => {
  const { favorites, toggleFavorite} = useContext(ContextPexels);
  console.log(favorites)
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
      {favorites.map(foto => (
          <div key={foto.id} className="photo-card">
            <img src={foto.src.medium} alt={foto.alt} />
            <div className="photo-alt-text">{foto.alt}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Favorites;
