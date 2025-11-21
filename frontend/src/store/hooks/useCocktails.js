import { useStore } from '../store.js'

export const useCocktails = () => {
  const { cocktails, setCocktails, searchQuery, setSearchQuery } = useStore()

  const fetchAllCocktails = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/v1/cocktails')
      if (!res.ok) throw new Error('Error fetching cocktails')
      const data = await res.json()
      setCocktails(data)
    } catch (error) {
      console.error(error)
    }
  }

  const createCocktail = async (cocktailData) => {
    try {
      const res = await fetch('http://localhost:5000/api/v1/cocktails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cocktailData)
      })
      if (!res.ok) throw new Error('Error creating cocktail')
      const newCocktail = await res.json()
      setCocktails([...cocktails, newCocktail])
      return newCocktail
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  const updateCocktail = async (id, cocktailData) => {
    try {
      const res = await fetch(`http://localhost:5000/api/v1/cocktails/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cocktailData)
      })
      if (!res.ok) throw new Error('Error updating cocktail')
      const updatedCocktail = await res.json()

      // Actualiza la store
      const updatedCocktails = cocktails.map(c =>
        c.id === id ? updatedCocktail : c
      )
      setCocktails(updatedCocktails)
      return updatedCocktail
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  const deleteCocktail = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/v1/cocktails/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
      if (!res.ok) throw new Error('Error deleting cocktail')

      const updatedCocktails = cocktails.filter(c => c.id !== id)
      setCocktails(updatedCocktails)
      return true
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  return {
    cocktails,
    fetchAllCocktails,
    searchQuery,
    setSearchQuery,
    createCocktail,
    updateCocktail,
    deleteCocktail,
  }
}
