import { GiftGriditem } from './GiftGriditem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GiftGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Cargando.......</h2>}

      <div className='card-grid'>
        {images.map((images) => (
          <GiftGriditem key={images.id} {...images} />
        ))}
      </div>
    </>
  );
};
