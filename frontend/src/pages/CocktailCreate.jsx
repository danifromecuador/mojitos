import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCocktails } from '../store/hooks/useCocktails'
import { uploadImageToImgbb } from '../store/hooks/useImageUpload' // Importa la función
import './CocktailCreate.css'

export const CocktailCreate = () => {
  const navigate = useNavigate()
  const { createCocktail } = useCocktails()
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '' // Aquí se guarda la URL después de subir la imagen
  })

  const [loading, setLoading] = useState(false)
  const [uploadingImage, setUploadingImage] = useState(false) // Estado para la subida de imagen

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Nuevo manejador para el file input que sube la imagen inmediatamente
  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    
    setUploadingImage(true)
    try {
      const imageUrl = await uploadImageToImgbb(file)
      setFormData(prev => ({ ...prev, image: imageUrl }))
    } catch (error) {
      alert('Error al subir la imagen: ' + error.message)
    } finally {
      setUploadingImage(false)
    }
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
            <label htmlFor='imageFile'>Imagen</label>
            <input
              type='file'
              id='imageFile'
              name='imageFile'
              accept='image/*'
              onChange={handleFileChange}
              disabled={uploadingImage}
            />
            {uploadingImage && <p>Subiendo imagen...</p>}
            {formData.image && !uploadingImage && (
              <img src={formData.image} alt='Preview' style={{ maxWidth: '200px', marginTop: '10px' }} />
            )}
          </div>

          <div className='form-actions'>
            <button type='submit' className='btn-submit' disabled={loading || uploadingImage}>
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
