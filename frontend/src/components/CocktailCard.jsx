import { useCocktails } from '../store/hooks/useCocktails'
import { useNavigate } from 'react-router-dom'
import './CocktailCard.css'

export const CocktailCard = ({ cocktail }) => {
  const { favorites, toggleFavorite } = useCocktails()
  const isFav = favorites.includes(cocktail.id)
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/cocktail/${cocktail.id}`)
  }

  const handleFavoriteClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    toggleFavorite(cocktail.id)
  }

  return (
    <div className='cocktail-card' onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className="image-favorites">
        <img src={cocktail.image} alt={cocktail.name} />
        <button
          className={isFav ? 'fav-active' : 'fav-inactive'}
          type="button"
          onClick={handleFavoriteClick}
          aria-label={isFav ? 'Quitar favorito' : 'Agregar a favoritos'}
        >
          ♥
        </button>
      </div>
      <div className="name-price">
        <h2>{cocktail.name}</h2>
        <span>${cocktail.price}</span>
      </div>
    </div>
  )
}
