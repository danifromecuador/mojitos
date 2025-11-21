import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCocktails } from '../store/hooks/useCocktails'
import './CocktailCreate.css'

export const CocktailCreate = () => {
  const navigate = useNavigate()
  const { createCocktail } = useCocktails()
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.description || !formData.price || !formData.image) {
      alert('Por favor completa todos los campos')
      return
    }

    setLoading(true)
    try {
      await createCocktail({
        ...formData,
        price: parseFloat(formData.price)
      })
      navigate('/')
    } catch (error) {
      console.error('Error creando coctel:', error)
      alert('Error al crear el coctel')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='cocktail-create'>
      <button className='back-btn' onClick={() => navigate(-1)}>
        ← Volver
      </button>

      <div className='form-container'>
        <h1>Crear nuevo coctel</h1>

        <form onSubmit={handleSubmit} className='cocktail-form'>
          <div className='form-group'>
            <label htmlFor='name'>Nombre del coctel</label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Ej: Mojito'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='description'>Descripción</label>
            <textarea
              id='description'
              name='description'
              value={formData.description}
              onChange={handleChange}
              placeholder='Describe el coctel...'
              rows='4'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='price'>Precio (entre 3 y 10)</label>
            <input
              type='number'
              id='price'
              name='price'
              value={formData.price}
              onChange={handleChange}
              placeholder='0.00'
              step='0.01'
              min='0'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='image'>URL de la imagen</label>
            <input
              type='url'
              id='image'
              name='image'
              value={formData.image}
              onChange={handleChange}
              placeholder='https://...'
            />
          </div>

          <div className='form-actions'>
            <button type='submit' className='btn-submit' disabled={loading}>
              {loading ? 'Creando...' : 'Crear coctel'}
            </button>
            <button type='button' className='btn-cancel' onClick={() => navigate('/')}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
