import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useCocktails } from '../store/hooks/useCocktails'
import './CocktailDetail.css'

export const CocktailDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { cocktails, updateCocktail, deleteCocktail } = useCocktails()

  const cocktail = cocktails.find(c => c.id === id)
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: cocktail?.name || '',
    description: cocktail?.description || '',
    price: cocktail?.price || ''
  })

  if (!cocktail) {
    return <div className='cocktail-detail'>Cóctel no encontrado</div>
  }

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
      alert('Cóctel actualizado exitosamente')
    } catch (error) {
      console.error('Error actualizando cóctel:', error)
      alert('Error al actualizar el cóctel')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!window.confirm('¿Estás seguro de que quieres eliminar este cóctel?')) {
      return
    }

    setLoading(true)
    try {
      await deleteCocktail(id)
      alert('Cóctel eliminado exitosamente')
      navigate('/')
    } catch (error) {
      console.error('Error eliminando cóctel:', error)
      alert('Error al eliminar el cóctel')
    } finally {
      setLoading(false)
    }
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
          {isEditing ? (
            <form onSubmit={handleUpdate} className='edit-form'>
              <div className='form-group'>
                <label htmlFor='name'>Nombre</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='description'>Descripción</label>
                <textarea
                  id='description'
                  name='description'
                  value={formData.description}
                  onChange={handleChange}
                  rows='4'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='price'>Precio</label>
                <input
                  type='number'
                  id='price'
                  name='price'
                  value={formData.price}
                  onChange={handleChange}
                  step='0.01'
                  min='0'
                />
              </div>

              <div className='form-actions'>
                <button type='submit' className='btn-save' disabled={loading}>
                  {loading ? 'Guardando...' : 'Guardar'}
                </button>
                <button type='button' className='btn-cancel' onClick={() => setIsEditing(false)}>
                  Cancelar
                </button>
              </div>
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
