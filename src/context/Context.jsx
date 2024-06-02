import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ContextPexels = createContext();

export const Context = ({ children }) => {
    const [fotos, setFotos] = useState([]);
    const [favorites, setFavorites] = useState([]);
  const API_KEY = 'jDSyiBvJnB0U7eYYRiAxBTG3XJ22ynh5qlHibsjD5XS9qMWHtK8Q2gKS';
  const API_URL = 'https://api.pexels.com/v1/search';

  useEffect(() => {
    const fetchFotos = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: API_KEY,
          },
          params: {
            query: 'nature', // Aquí puedes cambiar el término de búsqueda
            per_page: 12,   // Número de resultados por página
          },
        });
        setFotos(response.data.photos);
        console.log(fotos)
      } catch (error) {
        console.error('Error fetching photos from Pexels', error);
      }
    };

    fetchFotos();
  }, []);

  const toggleFavorite = (id) => {
    setFotos((prevPhotos) =>
      prevPhotos.map((foto) =>
      foto.id === id ? { ...foto, liked: !foto.liked } : foto
      )
    );

    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((foto) => foto.id === id);
      if (isFavorite) {
        return prevFavorites.filter((foto) => photo.id !== id);
      } else {
        const newFavorite = fotos.find((foto) => foto.id === id);
        return [...prevFavorites, { ...newFavorite, liked: true }];
      }
    });
  };

  return (
    <div>
        <ContextPexels.Provider value={{ fotos,setFotos,toggleFavorite,favorites}}>
				{children}
        </ContextPexels.Provider>
    </div>
  )
}
