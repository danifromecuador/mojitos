import { useParams, useNavigate } from 'react-router-dom'
import { useCocktails } from '../store/hooks/useCocktails'
import './CocktailDetail.css'

export const CocktailDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { cocktails } = useCocktails()

  const cocktail = cocktails.find(c => c.id === id)

  if (!cocktail) {
    return <div className='cocktail-detail'>Coctel no encontrado</div>
  }

  return (
    <div className='cocktail-detail'>
      <button className='back-btn' onClick={() => navigate(-1)}>
        ← Volver
      </button>

      <div className='detail-container'>
        <div className='detail-image'>
          <img src={cocktail.image} alt={cocktail.name} />
          <button className='favorite-btn'>♥</button>
        </div>

        <div className='detail-info'>
          <h1>{cocktail.name}</h1>
          <span className='price'>${cocktail.price.toFixed(2)}</span>

          <div className='description'>
            <h3>Descripción</h3>
            <p>{cocktail.description}</p>
          </div>

          <div className='actions'>
            <button className='btn-edit'>Editar</button>
            <button className='btn-delete'>Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
