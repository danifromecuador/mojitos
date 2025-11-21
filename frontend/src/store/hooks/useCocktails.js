import { useStore } from '../store.js'

export const useCocktails = () => {
  const { cocktails, setCocktails } = useStore()

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

  return { cocktails, fetchAllCocktails }
}
