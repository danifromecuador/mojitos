import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useCocktails } from '../store/hooks/useCocktails'
import './CocktailDetail.css'

export const CocktailDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { cocktails, updateCocktail, deleteCocktail, favorites, toggleFavorite } = useCocktails()

  const cocktail = cocktails.find(c => c.id === id)
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: cocktail?.name || '',
    description: cocktail?.description || '',
    price: cocktail?.price || ''
  })

  if (!cocktail) {
    return <div className='cocktail-detail'>Coctel no encontrado</div>
  }

  const isFav = favorites.includes(cocktail.id)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await updateCocktail(id, {
        ...formData,
        price: parseFloat(formData.price)
      })
      setIsEditing(false)
      alert('Coctel actualizado exitosamente')
    } catch (error) {
      console.error('Error actualizando coctel:', error)
      alert('Error al actualizar el coctel')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!window.confirm('¿Estás seguro de que quieres eliminar este coctel?')) {
      return
    }

    setLoading(true)
    try {
      await deleteCocktail(id)
      alert('Coctel eliminado exitosamente')
      navigate('/')
    } catch (error) {
      console.error('Error eliminando coctel:', error)
      alert('Error al eliminar el coctel')
    } finally {
      setLoading(false)
    }
  }

  const handleFavoriteClick = (e) => {
    e.stopPropagation()
    toggleFavorite(cocktail.id)
  }

  return (
    <div className='cocktail-detail'>
      <button className='back-btn' onClick={() => navigate(-1)}>
        ← Volver
      </button>

      <div className='detail-container'>
        <div className='detail-image'>
          <img src={cocktail.image} alt={cocktail.name} />
          <button 
            className={`favorite-btn ${isFav ? 'fav-active' : 'fav-inactive'}`} 
            onClick={handleFavoriteClick}
            aria-label={isFav ? 'Quitar favorito' : 'Agregar a favoritos'}
          >
            ♥
          </button>
        </div>

        <div className='detail-info'>
          {isEditing ? (
            <form onSubmit={handleUpdate} className='edit-form'>
              {/* formulario como tienes */}
            </form>
          ) : (
            <>
              <h1>{cocktail.name}</h1>
              <span className='price'>${cocktail.price.toFixed(2)}</span>

              <div className='description'>
                <h3>Descripción</h3>
                <p>{cocktail.description}</p>
              </div>

              <div className='actions'>
                <button className='btn-edit' onClick={() => setIsEditing(true)}>
                  Editar
                </button>
                <button className='btn-delete' onClick={handleDelete} disabled={loading}>
                  {loading ? 'Eliminando...' : 'Eliminar'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
