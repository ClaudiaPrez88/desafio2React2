import { useContext } from 'react';
import { ContextPexels } from '../context/Context';
import IconHeart from './IconHeart';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Gallery = () => {

  const { fotos,toggleFavorite } = useContext(ContextPexels);
  return (
    <div>
       <div className="gallery grid-columns-5 p-3">
      {fotos.map((foto) => (
                  <Card   key={foto.id}  style={{ width: '18rem' }}>
                  <img src={foto.src.medium} alt={foto.photographer} />
                  <Button className="icon-heart-btn" onClick={() => toggleFavorite(foto.id)}>
                    <IconHeart filled={foto.liked} />
                  </Button>
                  </Card>
                  ))}
    </div>;
    </div>
  )
}

export default Gallery;



